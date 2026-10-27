// Downloads a Material Symbols Outlined subset containing only the icons the site uses,
// so the icon font is self-hosted (~3 KB) instead of a render-blocking Google Fonts request.
// After adding an icon to the markup, add its name here and run: npm run icons
import {writeFile} from 'node:fs/promises'

const ICONS = [
  'add_circle', 'arrow_back', 'arrow_downward', 'arrow_forward', 'check', 'close', 'event', 'group', 'link',
  'location_on', 'menu', 'mic', 'north_east', 'open_in_new', 'pause', 'play_arrow', 'search', 'videocam', 'volume_up',
]

const css = await (
  await fetch(
    `https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@400,0&icon_names=${ICONS.sort().join(',')}&display=block`,
    {headers: {'User-Agent': 'Mozilla/5.0 (Macintosh) AppleWebKit/537.36 Chrome/141 Safari/537.36'}},
  )
).text()
const url = css.match(/url\((https:[^)]+)\) format\('woff2'\)/)?.[1]
if (!url) throw new Error(`No woff2 URL in Google Fonts response:\n${css}`)
const font = Buffer.from(await (await fetch(url)).arrayBuffer())
await writeFile(new URL('../src/assets/fonts/material-symbols-subset.woff2', import.meta.url), font)
console.log(`Saved ${ICONS.length} icons (${font.length} bytes)`)
