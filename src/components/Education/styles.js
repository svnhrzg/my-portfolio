import styled from "styled-components";

export const Section = styled.section`
  padding-inline: 3rem;
  padding-block: 1.5rem 6rem;
  background-color: var(--clr-dark);
  color: #fff;
  display: flex;
  gap: 3rem;
  height: 100vh;
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

  & * h3 {
    position: relative;
    margin-left: 1.75rem;
    font-weight: var(--fw-medium);
    margin-bottom: 0.5rem;
  }

  @media (max-width: 960px) {
    padding-inline: 2rem;
    padding-block: 1rem 2.5rem;
    height: 100%;
    flex-direction: column;
    gap: 0;
  }

  @media (max-width: 600px) {
    padding-inline: 1.25rem;
    padding-block: 0 2rem;
    border-top: none;

    & * h3 {
    margin-left: 1rem;
    font-size: var(--fs-body);
  }
}
`

export const Column = styled.div`
  width: 50%;
  @media (max-width: 960px) {
    width: 100%;
  }
`

export const Ul = styled.ul`
  list-style: none;
  margin-bottom: 0.5rem;
  font-weight: var(--fw-bold);
  line-height: 1.7;

  & * li {
    font-weight: var(--fw-regular);
    position: relative;
    margin-left: 1.75rem;
  }

  @media (max-width: 600px) {
    font-size: var(--fs-mobile);

    & * li {
    margin-left: 1rem;
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

export const DotOutline = styled.li`
    ::before {
    content: '';
    width: 1.125rem;
    height: 1.125rem;
    border-radius: 1rem;
    border: 1px solid var(--clr-grey-light);
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