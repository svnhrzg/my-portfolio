import styled, {createGlobalStyle} from 'styled-components'

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
    scroll-padding: 38px;
  }
}

body {
  width: 100%;
  max-width: 1400px;
  margin-inline: auto;
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

export const Dot = styled.div`
  margin-block: 1.5rem 0.5rem;

  ::before {
    content: '';
    width: 1.125rem;
    height: 1.125rem;
    border-radius: 1rem;
    background-color: var(--clr-dark);
    position: absolute;
    top: 0.25rem;
    left: -1.75rem;

    @media(max-width: 600px) {
    left: -1rem;
    top: 0.425rem;
    width: 0.675rem;
    height: 0.675rem;
  }
  }
`

export const DotWhite = styled.div`
  margin-block: 1.5rem 0.5rem;

  ::before {
    content: '';
    width: 1.125rem;
    height: 1.125rem;
    border-radius: 1rem;
    background-color: var(--clr-grey-light);
    position: absolute;
    top: 0.25rem;
    left: -1.75rem;

    @media(max-width: 600px) {
    left: -1rem;
    top: 0.425rem;
    width: 0.675rem;
    height: 0.675rem;
  }
  }
`