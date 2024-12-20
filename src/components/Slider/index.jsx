import React from 'react'
import {Prev, Next, Img} from './styles'

export default function Slider({project, selectedSlide, onNextSlide, onPrevSlide}) {

  return (
    <>
        <Prev onClick={onPrevSlide} />
        <Next onClick={onNextSlide} />
        <Img src={project.slides[selectedSlide]} alt={project.title} />
    </>
  )
}