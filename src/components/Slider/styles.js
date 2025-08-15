import styled from 'styled-components'

export const Img = styled.img`
  object-fit: contain;
  height: 90%;

  @media(max-width: 600px) {
    max-height: 450px;
  }
`

export const Prev = styled.div`
  position: absolute;
  left: 0;
  z-index: 2;
  width: 40%;
  height: 90%;
  cursor: pointer;
`

export const Next = styled.div`
  position: absolute;
  left: 60%;
  z-index: 2;
  width: 40%;
  height: 90%;
  cursor: pointer;
`