"""Version local homepage assets by content so releases invalidate browser caches."""
from pathlib import Path
import hashlib
import re
ROOT = Path(__file__).resolve().parents[1]
def version_assets():
    page = ROOT / 'site/index.html'
    original = page.read_text()
    updated = original
    for name in ('styles.css', 'homepage.css', 'homepage.js'):
        version = hashlib.sha256((ROOT / 'site' / name).read_bytes()).hexdigest()[:12]
        pattern = r'(?P<attr>href|src)="\./' + re.escape(name) + r'(?:\?[^"<>]*)?"'
        updated, count = re.subn(pattern, lambda m: f'{m["attr"]}="./{name}?v={version}"', updated)
        assert count == 1, f'Expected one reference to {name}, found {count}'
        print(f'Versioned {name}: {version}')
    if updated != original:
        page.write_text(updated)
    shop = ROOT / 'site/shop.html'
    shop_source = shop.read_text()
    for name in ('styles.css', 'homepage.css', 'homepage.js', 'assets/shop-carousel.css', 'assets/shop-carousel.js'):
        asset = ROOT / 'site' / name
        if not asset.exists():
            continue
        version = hashlib.sha256(asset.read_bytes()).hexdigest()[:12]
        pattern = r'(?P<attr>href|src)="\./' + re.escape(name) + r'(?:\?[^"<>]*)?"'
        shop_source = re.sub(pattern, lambda m: f'{m["attr"]}="./{name}?v={version}"', shop_source)
    shop.write_text(shop_source)
if __name__ == '__main__':
    version_assets()
