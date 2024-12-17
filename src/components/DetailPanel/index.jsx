import React from 'react'
import {Panel, Description, Links} from './styles'
import { Title, Dot } from '../Project/styles'

export default function DetailPanel({project, isOpen, onIsOpen}) {
  
  return (
    <Panel style={isOpen ? {transform: "translateX(0)", opacity: 1} : {}} onClick={onIsOpen}>
      <Title>
        <Dot style={{backgroundColor: '#fff'}}/>
        {project.title}
      </Title>
      <Description>{project.description}</Description>
      {/* <SkillsList>
        {project.skills.map(skill => <li>— {skill}</li>)}
      </SkillsList> */}
      <Links>
        <li>
        {project.link && <a href={project.link} target='_blank'  rel="noreferrer">view project</a>}
        </li>
        <li>
        {project.github && <a href={project.github} target='_blank' rel="noreferrer">github</a>}
        </li>
      </Links>
    </Panel>
  )
}