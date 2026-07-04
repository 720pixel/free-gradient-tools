# free-gradient-tools

Free, MIT-licensed gradient and color palette datasets, plus a few small CSS
helpers. Drop the JSON into your project, or use the helpers to render CSS.

## Contents

- `data/gradients.json` — 174 curated gradients with color stops and ready CSS.
- `data/palettes.json` — 600 four-color palettes (hex and RGB).
- `data/tags.json` — category tags used across the sets.
- `src/gradient.js` — tiny helpers: `toCss`, `hexToRgb`, `rgbToHex`, `codeToColors`.

## Install

```bash
npm install free-gradient-tools
```

Or just copy the JSON files you need.

## Usage

```js
import { toCss, codeToColors } from "free-gradient-tools";
import gradients from "free-gradient-tools/data/gradients.json" assert { type: "json" };

const g = gradients.gradients[0];
document.body.style.background = g.css;        // ready to use

// or build one yourself
const css = toCss([{ color: "#7c5cff", pos: 0 }, { color: "#22d3ee", pos: 100 }], 120);

// palette codes -> colors
codeToColors("222831393e4600adb5eeeeee"); // ["#222831","#393e46","#00adb5","#eeeeee"]
```

## Data shape

Gradient:

```json
{ "name": "Warm Flame", "slug": "warm-flame", "angle": 45,
  "colors": ["#ff9a9e", "#fad0c4"],
  "stops": [{ "color": "#ff9a9e", "pos": 0 }, { "color": "#fad0c4", "pos": 100 }],
  "css": "linear-gradient(45deg, #ff9a9e 0%, #fad0c4 100%)" }
```

Palette:

```json
{ "code": "222831393e4600adb5eeeeee",
  "colors": ["#222831", "#393e46", "#00adb5", "#eeeeee"],
  "rgb": [[34,40,49],[57,62,70],[0,173,181],[238,238,238]],
  "tags": ["dark", "grey", "teal"] }
```

## License

MIT. Color values are facts and free to use. Curated gradient set is MIT.

Made by [720pixel](https://720p.red).
