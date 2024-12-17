import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  height: 100svh;
  padding-inline: 3rem;
  border-top: 2px solid var(--clr-dark);
  position: relative;
  padding-bottom: 4.5rem;
  scroll-snap-align: start;

  @media(max-width: 960px) {
    padding-bottom: 1.5rem;
    padding-inline: 2rem;
  }

  @media(max-width: 600px) {
    height: 100%;
    padding-inline: 1.25rem;
  }
`

export const ProjectInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding-block: 0.75rem;
  cursor: pointer;
`

export const Dot = styled.div`
  display: inline-block;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 1rem;
  margin-top: -2px;
  background-color: var(--clr-dark);

  @media(max-width: 600px) {
    display: none;
  }
`

export const Title = styled.h3`
  font-size: var(--fs-small);
  font-weight: var(--fw-regular);
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media(max-width: 600px) {
    font-size: var(--fs-mobile);
  }
`

export const Skills = styled.p`
  font-size: var(--fs-small);

  @media(max-width: 600px) {
    font-size: var(--fs-mobile);
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const Image = styled.img`
  object-fit: cover;
  cursor: pointer;
  /* box-shadow: 0.25rem 0.5rem 0.5rem 0 rgba(0 0 0 / 0.1); */
  /* height: 100%; */
`