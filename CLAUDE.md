# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static single-page travel planning app for a 7-day Osaka/Kyoto trip (03/28–04/03, 2026). No build system, no backend, no package manager — open `index.html` directly in a browser.

## Architecture

The app is a tab-based SPA built with vanilla JS, Tailwind CSS (CDN), and Font Awesome (CDN). After refactoring, the code is split into three layers loaded via `<script>` tags in order:

```
1. Data layer    js/data/itinerary.js   js/data/prep.js
2. Component layer  js/components/Navigation.js  ItineraryView.js  PrepView.js
3. Entry point   js/app.js  (calls initNavigation / initItineraryView / initPrepView)
```

**How views work:** Five `<section class="view-section">` elements exist in `index.html`. Only the one with `.active` is displayed. `Navigation.js` toggles the `.active` class on click.

**How itinerary rendering works:** `ItineraryView.js` receives the `itineraryData` array (defined in `js/data/itinerary.js`) and dynamically builds all HTML via template literals. Each day has typed `sections` (`type: "transport" | "attraction" | "dining" | "todo"`), each with optional sub-fields (`table`, `collapsible`, `list`, `card`, `hint`, `buttons`). Adding a new day = adding an object to the array.

**How prep checklist works:** `PrepView.js` renders checkbox items from `prepData` (in `js/data/prep.js`) into two containers (`#prep-list-tickets`, `#prep-list-gear`). `updateProgress()` is a global function called via `onchange` in the generated HTML.

## Key Conventions

- **Colours** are defined as CSS variables in `css/style.css` (e.g. `--primary-blue: #4A6E8C`) and also used directly as Tailwind arbitrary values (`text-[#4A6E8C]`) in JS template strings.
- **Data changes** (new spots, updated times, budget figures) only require editing `js/data/itinerary.js` or `js/data/prep.js` — no HTML or component changes needed.
- **New section types** require adding a `build*` function in `ItineraryView.js` and calling it inside `buildSection()`.
- Static HTML sections (Overview, Budget, Links) live directly in `index.html` and are not JS-rendered.
