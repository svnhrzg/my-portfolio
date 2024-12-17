import React, {useState} from 'react'
import DetailPanel from '../DetailPanel'
import Slider from '../Slider'
import {Container, ProjectInfo, Dot, Title, Skills, Wrapper, Image} from './styles'

export default function Project({project}) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedSlide, setSelectedSlide] = useState(0)

  function handleIsOpen() {
    setIsOpen(is => !is)
  }

  function handleNextSlide() {
    if (selectedSlide === project.printedMatter.length - 1) {setSelectedSlide(0)}
    else {setSelectedSlide(selectedSlide + 1)}
  }

  function handlePrevSlide() {
    if (selectedSlide === 0) {setSelectedSlide(project.printedMatter.length - 1)}
    else {setSelectedSlide(selectedSlide - 1)}
  }

  return (
    <Container>
      <ProjectInfo onClick={handleIsOpen}>
        <Title>
          <Dot/>
          {project.printedMatter ? project.printedMatter[selectedSlide].caption : project.title}
        </Title>
        <Skills>{project.skills.join(' / ')}</Skills>
      </ProjectInfo>
      <Wrapper>
          {/* IMAGE COMPONENT */}
        {project.image && <Image src={project.image} alt={project.title} onClick={handleIsOpen} />} 
          {/* SLIDER COMPONENT */}
        {project.printedMatter && <Slider printedMatter={project.printedMatter} selectedSlide={selectedSlide} onNextSlide={handleNextSlide} onPrevSlide={handlePrevSlide} />}
      </Wrapper>
        {/* DETAIL PANEL COMPONENT */}
      <DetailPanel isOpen={isOpen} project={project} onIsOpen={handleIsOpen}/>
    </Container>
  )
}