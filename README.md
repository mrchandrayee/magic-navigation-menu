# Magic Navigation Menu

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/magic-navigation-menu/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A responsive recreation of the animated five-item navigation bar shown in the uploaded 19.4-second screen recording.

## Menu items
- Home
- Profile
- Message
- Photos
- Settings

## Visual behavior
- White rounded navigation bar on a charcoal background.
- Five evenly spaced outline icons.
- Bright green circular active indicator moves horizontally between items.
- Active icon rises above the navigation bar.
- Active label fades/slides into view below the icon.
- Decorative curved cut-outs around the indicator.
- Smooth 0.5-second CSS transitions.

## Implementation notes
The video editor visibly shows the following source concepts and values:
- `.navigation`: `position: relative`, `width: 400px`, `height: 70px`, white background, flex centering.
- Navigation list items: `width: 70px`, `height: 70px`, `position: relative`, `z-index: 1`.
- Icon: `line-height: 75px`, `font-size: 1.5em`, `transition: .5s`.
- Active icon: `transform: translateY(-32px)`.
- Indicator: `position: absolute`, `top: -50%`, `width/height: 60px`, green background, circular border, `6px solid` page background.
- Five active-state rules move the indicator by `translateX(calc(70px * index))`.

This recreation uses inline SVG icons rather than the Ionicons dependency visible in the source editor, so it works offline without external libraries. The original interaction and dimensions are reproduced, with responsive adjustments for narrow screens.

## Run locally
Open `index.html` directly, or run:

```bash
python -m http.server 8000
```

Visit http://localhost:8000.

## Files
- `index.html` — navigation markup and five inline SVG icons
- `style.css` — layout, active bubble, transitions and responsive behavior
- `script.js` — click selection and keyboard arrow navigation

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
