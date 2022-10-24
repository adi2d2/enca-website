import { css } from '@emotion/react'

export const globalStyles = css`
  /* VARIABLES */
  :root {
    --color-dark1: #12262b;
    --color-dark2: #234c4d;
    --color-mid1: #447f7e;
    --color-mid2: #67a59c;
    --color-green: #00dbb6;
    --color-blue: #009ca8;
    --color-secondary: #d8e6e8;
    --color-light: #f7feff;
    --color-warning: #dbb600;

    --font-size-1: 14px;
    --font-size-2: 16px;
    --font-size-3: 18px;
    --font-size-4: 22px;
    --font-size-5: 26px;
    --font-size-6: 32px;
    --font-size-7: 38px;
    --font-size-8: 48px;
    --font-size-9: 58px;

    --spacing-1: 4px;
    --spacing-2: 8px;
    --spacing-3: 12px;
    --spacing-4: 16px;
    --spacing-5: 20px;
    --spacing-6: 24px;
    --spacing-7: 30px;
    --spacing-8: 36px;
    --spacing-9: 42px;
  }

  /*
    Shamelessly inspired (stolen) Josh's Custom CSS Reset ;-) 
    https://www.joshwcomeau.com/css/custom-css-reset/
  */

  /* 
  - Allow percentage-based heights in the application 
  - Fixes text inflating when switching to mobile landscape
  */
  html,
  body {
    height: 100%;
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
    line-height: calc(1em + 0.5rem);
    margin: 0;
    padding: 0;
  }

  /* Everything border-box */
  *,
  *::before,
  *:after {
    box-sizing: border-box;
  }

  /* 
  Fonts standardization
  - macOS 10.11-10.12 --> -apple-system
  - macOS 10.11-10.12 --> BlinkMacSystemFont
  - Windows 6+ --> "Segoe UI"
  - Android 4+ --> "Roboto"
  - Ubuntu 10.10+ --> "Ubuntu",
  - Gnome 3+ --> "Cantarell"
  - KDE Plasma 5+ --> "Noto Sans"
  - fallback --> sans-serif
  - macOS emoji --> "Apple Color Emoji"
  - Windows emoji --> "Segoe UI Emoji"
  - Windows emoji --> "Segoe UI Symbol"
  - Linux emoji --> "Noto Color Emoji"
  */

  html {
    font-family: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      'Roboto', 'Ubuntu', 'Cantarell', 'Noto Sans', sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      'Noto Color Emoji' !important;
  }

  /* 
  - Improve text rendering 
  - All numbers equal width
  */
  body {
    -webkit-font-smoothing: antialiased;
    font-variant-numeric: tabular-nums;

    background-color: var(--color-dark1);
    color: var(--color-secondary);

    /* scroll-snap-type: y mandatory; */
  }

  /* Improve media defaults */
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  /* Remove built-in form typography styles */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Avoid text overflows */
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    line-height: calc(1em + 0.5rem);
  }

  /* 
    - Create a root stacking context 
    - Allow percentage-based heights in react application 
  */
  #root,
  #__next,
  #app {
    isolation: isolate;
    height: 100%;
  }
`
