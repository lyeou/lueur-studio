"""Validate and package the existing static site; no framework or compilation."""
from pathlib import Path
import shutil
from check_site import check
check()
root=Path(__file__).resolve().parents[1]
out=root/'work/build/site'
if out.exists(): shutil.rmtree(out)
out.parent.mkdir(parents=True,exist_ok=True)
shutil.copytree(root/'site',out)
print(f'PASS: static build produced {sum(p.is_file() for p in out.rglob("*"))} files in {out}')
