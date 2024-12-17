import styled from "styled-components";

export const Section = styled.section`
  padding-inline: 3rem;
  padding-block: 3rem 6rem;
  margin-top: 3.25rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
    padding-inline: 2rem;
    padding-block: 2rem;
  }
`

export const HeroText = styled.div`
  font-size: var(--fs-large);
  font-weight: var(--fw-bold);
  line-height: 1.4;
  max-width: 34ch;

  @media (max-width: 960px) {
    font-size: var(--fs-medium);
  }
`

export const Contact = styled.div`
  /* font-family: var(--ff-mono); */
  font-size: var(--fs-small);
  font-weight: var(--fw-regular);
  display: flex;
  gap: 2.5rem;
  margin-top: 3.5rem;

  & div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  & a {
    text-decoration: none;
    color: inherit;
    border-bottom: 2px solid var(--clr-dark);
    transition: border-bottom 0.2s;
  }

  & a:hover {
    border-bottom: 2px solid transparent;
  }

  @media (max-width: 960px) {
    font-size: var(--fs-mobile);
    margin-top: 1.5rem;
  }
`

export const HeroImg = styled.img`
  max-width: 300px;
  border-radius: 300px; 
  align-self: flex-end; 
  margin-top: 2rem; 
  margin-left: 4rem;

  @media (max-width: 960px) {
    max-width: 200px;
  }
`