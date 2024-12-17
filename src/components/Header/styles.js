import styled from 'styled-components'

export const Nav = styled.nav`
  display: none;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
  padding-inline: 3rem;
  padding-block: 0.5rem;
  font-size: var(--fs-small);
  border-bottom: 2px solid var(--clr-dark);
  background: #fff;

  justify-content: space-between;
  align-items: center;

  & h3 {
    font-weight: var(--fw-regular);
  }

  & a {
    text-decoration: none;
    color: var(--clr-dark);
  }

  @media(max-width: 960px) {
    display: flex;
    font-size: var(--fs-mobile);
  }
`