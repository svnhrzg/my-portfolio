import React from 'react'
import {Prev, Next, Img} from './styles'

export default function Slider({printedMatter, selectedSlide, onNextSlide, onPrevSlide}) {

  return (
    <>
        <Prev onClick={onPrevSlide} />
        <Next onClick={onNextSlide} />
        <Img src={printedMatter[selectedSlide].image} alt={printedMatter[selectedSlide].title} />
    </>
  )
}