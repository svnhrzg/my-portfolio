import React from 'react'
import {Prev, Next, Img, Wrapper} from './styles'

export default function Slider({printedMatter, selectedSlide, onNextSlide, onPrevSlide}) {

  return (
    <Wrapper>
        <Prev onClick={onPrevSlide} />
        <Next onClick={onNextSlide} />
        <Img src={printedMatter[selectedSlide].image} alt={printedMatter[selectedSlide].title} />
    </Wrapper>
  )
}