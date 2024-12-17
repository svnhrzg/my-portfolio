import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  z-index: 3;
  padding-inline: 3rem;
  padding-block: 0.5rem;
  font-size: var(--fs-small);
  background: var(--clr-grey-light);

  justify-content: space-between;
  align-items: center;
  scroll-snap-align: start;

  & h3 {
    font-weight: var(--fw-regular);
  }

  & a {
    text-decoration: none;
    color: var(--clr-dark);
  }

  @media(max-width: 960px) {
    padding-inline: 2rem;
  }

  @media(max-width: 600px) {
    position: fixed;
    top: 0;
    border-bottom: 2px solid var(--clr-dark);
    font-size: var(--fs-mobile);
    padding-inline: 1.25rem;
    
    & h3 {
    font-weight: var(--fw-regular);
    font-size: var(--fs-mobile);
  }
  }
`