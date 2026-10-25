# Mathematics for Machine Learning

An independent interactive educational presentation project, using visual explanations, mathematical graphs, and step-by-step solved exercises to explore calculus and its connections to Physics and Machine Learning.

Educational reference: James Stewart, *Calculus*, Eighth Edition (2016), Cengage Learning. This project is not affiliated with or endorsed by the author or publisher. Reference textbook files are not distributed in this repository. No rights to third-party material are implied.

## Technology

React, Vite, TypeScript, plain CSS, SVG visualizations, and locally installed KaTeX. No backend, database, authentication, or API keys are required.

## Local development

Use Node.js 24 or newer; the verification script uses native TypeScript imports.

```sh
npm install
npm run dev
```

Open http://127.0.0.1:5173. Application content and mathematical rendering are local after installation. The standalone `Videoja.html` YouTube embed requires an internet connection.

```sh
npm test
npm run build
```

## Available presentations

| Presentation | Route | Slides |
|---|---|---:|
| Introduction to Calculus | `/preview` | 25 |
| Chapter 1: Functions and Limits — Theory | `/chapter-1` | 50 |
| Chapter 1: Functions and Limits — Solved Exercises | `/chapter-1/exercises` | 50 |
| Chapter 2: Derivatives — Theory | `/chapter-2` | 60 |

The homepage organizes all 17 textbook chapters. Implemented Theory and Solved Exercises presentations are grouped within each chapter; unavailable presentations are marked “Coming soon.” Authored specifications live in `Markdowns/`; a specification does not necessarily indicate an implemented presentation.

## Presentation controls

- Right arrow / Space: next slide; Left arrow: previous slide.
- Home / End: first / last slide; click the counter to jump.
- F: fullscreen; Escape: exit fullscreen.
- The on-screen Home link returns to the chapter homepage.

Focused sliders and inputs retain their keyboard controls. Six-minute, unnumbered breaks follow Preview slide 13, Chapter 1 Theory slide 25, Chapter 1 Exercises slide 26, and Chapter 2 Theory slide 33.

## Development status

Four presentations are implemented, with interactive simulations and verification scripts. Further chapters and exercise decks remain under development. Original textbook PDFs, local screenshots, dependencies, build output, and private configuration are intentionally excluded from Git.
