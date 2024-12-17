import styled from 'styled-components'

export const Panel = styled.div`
  background-color: var(--clr-dark);
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  padding-block: 1rem;
  padding-inline: 2rem;
  color: #fff;
  cursor: pointer;
  
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  transform: translateX(-75%);
  opacity: 0;
  transition: all 0.3s;

  @media(max-width: 960px) {
    width: 100%;
  }
`

export const Description = styled.p`
  @media(max-width: 960px) {
    font-size: var(--fs-mobile);
  }
`

// export const SkillsList = styled.ul`
//   list-style: none;
// `

export const Links = styled.ul`
  margin-top: 0.75rem;

& li {
  list-style: none;
  margin-bottom: 1rem;
}

& a {
  text-decoration: none;
  color: #fff;
  border-bottom: 1px solid #fff;
  transition: all 0.2s;
}

& a:hover {
  border-bottom: 1px solid transparent;
}

@media(max-width: 960px) {
    font-size: var(--fs-mobile);
  }
`