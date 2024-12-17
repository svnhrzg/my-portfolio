import styled from "styled-components";

export const Section = styled.section`
  padding-inline: 3rem;
  padding-block: 3rem 6rem;
  background-color: var(--clr-dark);
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  scroll-snap-align: start;

  & * a {
    text-decoration: none;
    color: white;
    border-bottom: 1px solid #fff;
    transition: border-bottom 0.2s;
  }

  & * a:hover {
    border-bottom: 1px solid transparent;
  }

  @media (max-width: 960px) {
    padding-inline: 2rem;
    padding-block: 2.5rem;
  }

  @media (max-width: 600px) {
    padding-inline: 1.25rem;
    border-top: none;
  }
`

export const Ul = styled.ul`
  list-style: none;
  margin-bottom: 1rem;
  font-weight: var(--fw-bold);

  & * li {
    font-weight: var(--fw-regular);
  }

  @media (max-width: 600px) {
    font-size: var(--fs-mobile);
  }
`

export const H3 = styled.h3`
  font-weight: var(--fw-medium);
  margin-bottom: 0.5rem;

  @media (max-width: 600px) {
    font-size: var(--fs-mobile);
  }
`