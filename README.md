# Free Gradient: free CSS gradients, color palettes, and gradient tools

**[freegradient.com](https://freegradient.com)** is a fast, free library of
**3000+ gradients** and **4000+ color palettes** with a full set of
browser-based color tools. Copy CSS, build your own, and download GRD, SVG, and
PNG. No signup needed to browse or copy.

This repository holds the free, MIT-licensed **datasets and small helpers** that
sit behind the site. If you want the live tools, use
**[freegradient.com](https://freegradient.com)**.

---

## 🎨 Photoshop .GRD generator (free)

**Turn any CSS gradient into a real Photoshop `.grd` file, and read `.grd` files back to CSS.**
This is the standout tool: paste a CSS, HEX, or RGB gradient and download a
byte-perfect Photoshop gradient you can load straight into Photoshop, or upload a
`.grd` and get every gradient as CSS and hex.

- **CSS to GRD** → [freegradient.com/tools/css-to-grd](https://freegradient.com/tools/css-to-grd)
- **GRD parser (GRD to CSS)** → [freegradient.com/tools/grd-parser](https://freegradient.com/tools/grd-parser)

Supports linear and radial gradients, multiple color stops, and opacity stops.
No signup to convert. Works in the browser.

---

## Features on freegradient.com

Color and gradient:

- **[Gradient library](https://freegradient.com/gradients)**: 3000+ gradients,
  copy CSS, Tailwind, and SVG, download free `.grd` and `.png`.
- **[Color palettes](https://freegradient.com/palettes)**: 4000+ four-color
  palettes, copy hex, RGB, and OKLCH.
- **[Gradient backgrounds](https://freegradient.com/backgrounds)**: 1000
  large-format gradient wallpapers, free PNG.
- **[Gradient builder](https://freegradient.com/builder)**: multi-stop linear,
  radial, diamond, angle, and reflected gradients with CSS export.
- **[Image to gradient](https://freegradient.com/tools/image-to-gradient)**:
  pull a gradient off any image with draggable sample handles.
- **[Color editor and visualizer](https://freegradient.com/editor)**: shade,
  saturation, hue, temperature, luminance, colorblind, WCAG contrast, and theme.
- **[GRD parser](https://freegradient.com/tools/grd-parser)**: read a Photoshop
  `.grd` file as CSS and hex.
- **[CSS to GRD](https://freegradient.com/tools/css-to-grd)**: generate a `.grd`
  from a CSS gradient, HEX, RGB, HTML, or BBCode colors.
- **[Gradient buttons](https://freegradient.com/buttons)**: 30 copy-paste CSS
  button styles.

Text tools:

- **[Fancy text generator](https://freegradient.com/tools/fancy-text)**: 25+
  Unicode font styles to copy and paste.
- **[Gradient text colorizer](https://freegradient.com/tools/text-colorizer)**:
  color text letter by letter as BBCode, HTML, CSS, or Tailwind, with any font.
- **[Big text generator](https://freegradient.com/tools/big-text)**: large,
  boxed, circled, and full-width letters.
- **[Text decorator](https://freegradient.com/tools/text-decorator)**: wrap text
  in hearts, stars, and symbol borders.
- **[Case converter](https://freegradient.com/tools/case-converter)**:
  lowercase, UPPERCASE, capitalize, sentence, random, and normalize.
- **[Strikethrough text](https://freegradient.com/tools/strikethrough)**: cross
  out text 10 ways, strike, tilde, slash, underline, and overline.
- **[Character counter](https://freegradient.com/tools/character-count)**: count
  characters, words, sentences, and reading time.

Developer:

- **[Data Forge](https://freegradient.com/tools/data-forge)**: chain data
  operations into a recipe, Base64, hex, URL, binary, Base32, ROT13, XOR, Caesar,
  Morse, MD5, SHA-1/256/512, JSON, JWT, timestamps, and more.

Also a **[free JSON API](https://freegradient.com/docs/api)** for gradients,
palettes, tags, converters, and random endpoints, dark and light themes, fast
pages, mobile first.

## What is in this repository

- `data/gradients.json`: 174 curated gradients with color stops and ready CSS (the site has 3000+).
- `data/palettes.json`: 600 four-color palettes with hex and RGB, sampled from the 4000+ on the site.
- `data/tags.json`: category tags used across the sets.
- `src/gradient.js`: tiny helpers: `toCss`, `hexToRgb`, `rgbToHex`,
  `codeToColors`.

## Install

```bash
npm install free-gradient-tools
```

Or copy the JSON files you need.

## Usage

```js
import { toCss, codeToColors } from "free-gradient-tools";
import gradients from "free-gradient-tools/data/gradients.json" assert { type: "json" };

document.body.style.background = gradients.gradients[0].css; // ready to use

const css = toCss(
  [{ color: "#7c5cff", pos: 0 }, { color: "#22d3ee", pos: 100 }],
  120,
);

codeToColors("222831393e4600adb5eeeeee");
// ["#222831", "#393e46", "#00adb5", "#eeeeee"]
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

## Keywords

Free CSS gradients, gradient generator, gradient background, CSS gradient tools,
color palette generator, gradient buttons, image to gradient, Photoshop grd,
color contrast checker, colorblind simulator.

## License

MIT. Color values are facts and free to use. The curated gradient set is MIT.

Built by [720pixel](https://720p.red) · Live at
[freegradient.com](https://freegradient.com).
