#!/bin/sh
# Copies the public site into dist/ and fills in the absolute site URL.
# Usage: SITE_URL=https://kbuzz.ianmugwe656.workers.dev sh scripts/build.sh
set -eu
SITE_URL="${SITE_URL:-${CF_PAGES_URL:-https://kbuzz.ianmugwe656.workers.dev}}"
SITE_URL="${SITE_URL%/}"

rm -rf dist
mkdir -p dist
cp -R index.html favicon.svg assets dist/
sed -i.bak "s#__SITE_URL__#${SITE_URL}#g" dist/index.html && rm dist/index.html.bak

cat > dist/robots.txt <<TXT
User-agent: *
Allow: /
Sitemap: ${SITE_URL}/sitemap.xml
TXT

cat > dist/sitemap.xml <<XML
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${SITE_URL}/</loc></url>
</urlset>
XML

echo "Built dist/ for ${SITE_URL}"
