import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root {
  --gradient: linear-gradient(to left, hsl(89, 58%, 75%), hsl(207, 87%, 67%));
  --clr-grey-light: hsl(0, 0%, 99%);
  --clr-dark: hsl(213, 10%, 18%);

  --ff-sans: 'Fira Sans', sans-serif;
  --ff-mono: 'Inconsolata', monospace;

  --fs-body: 16px;
  --fs-large: 38px;
  --fs-medium: 29px;
  --fs-small: 21px;
  --fs-xsmall: 18px;
  --fs-mobile: 15px;

  --fw-regular: 400;
  --fw-medium: 500;
  --fw-bold: 700;
}

/* RESET */

* {
  padding: 0;
  margin: 0;
}

*,
*::after,
*::before {
  box-sizing: border-box;
}

img {
  max-width: 100%;
  display: block;
}

html {
  font-family: var(--ff-sans);
  font-weight: var(--fw-regular);
  line-height: 1.5;
  background: var(--clr-grey-light);
  color: var(--clr-dark);
  scroll-behavior: smooth;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;

  @media(max-width: 600px){
    scroll-padding: 2.5rem;
  }
}

h1,
h2,
h3 {
  text-wrap: balance;
}

p,
li,
figcaption {
  max-width: 65ch;
  text-wrap: pretty;
}

.overflow {
  overflow-x: hidden;
  position: relative;
}
`