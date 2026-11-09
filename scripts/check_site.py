"""Dependency-free checks for the static Pages site."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import re
ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / 'site'
VOID = {'area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr'}
class Document(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.ids=set(); self.refs=[]; self.stack=[]; self.h1=0; self.main=0; self.images=[]
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if tag not in VOID: self.stack.append(tag)
        if 'id' in a:
            assert a['id'] not in self.ids, f'Duplicate ID: {a["id"]}'
            self.ids.add(a['id'])
        for k in ('src','href'):
            if k in a: self.refs.append(a[k])
        if tag=='h1': self.h1+=1
        if tag=='main': self.main+=1
        if tag=='img':
            assert 'alt' in a, 'Image without alt'
            self.images.append(a)
        if tag=='button': assert a.get('type')=='button', 'Explicit button type required'
    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)
        if tag not in VOID: self.handle_endtag(tag)
    def handle_endtag(self, tag):
        assert self.stack and self.stack[-1]==tag, f'Unexpected closing tag {tag}; stack {self.stack}'
        self.stack.pop()
def check():
    docs={}
    for p in SITE.glob('*.html'):
        d=Document(); d.feed(p.read_text()); assert not d.stack, p
        assert d.h1==1 and d.main==1, f'{p}: main/H1 landmarks'
        docs[p]=d
    for p,d in docs.items():
        for ref in d.refs:
            u=urlsplit(ref)
            if u.scheme or u.netloc: continue
            dest=(p.parent/unquote(u.path)).resolve() if u.path else p
            assert dest.exists(), f'{p.name}: missing {ref}'
            assert dest.is_relative_to(SITE), f'Asset outside deploy directory: {ref}'
            if u.fragment:
                assert dest in docs and u.fragment in docs[dest].ids, f'{p.name}: missing #{u.fragment}'
    for p in SITE.glob('*.css'):
        s=re.sub(r'/\*.*?\*/','',p.read_text(),flags=re.S)
        stack=[]
        for c in s:
            if c=='{': stack.append(c)
            if c=='}':
                assert stack, f'{p}: extra closing brace'
                stack.pop()
        assert not stack, f'{p}: missing closing brace'
    home=(SITE/'index.html').read_text()
    for required in ['The Joy of','Making.','让日常，生出喜欢。','A Little Joy, Made by You.','Explore Workshops','id="workshops"','id="shop"','id="story"','id="next"','id="saved-ideas"']:
        assert required in home, required
    assert home.count('class="arch-card"')==4
    assert 'Real Lueur photography coming soon' in home
    assert 'Bookings are not yet open' in home
    assert len(docs[SITE/'index.html'].images)==2, 'Only official logo imagery is available'
    print(f'PASS: {len(docs)} HTML pages, tags, IDs, anchors, scripts, images, stylesheets and homepage content/status checks.')
    return True
if __name__=='__main__': check()
