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
        {project.notion && <a href={project.notion} target='_blank'  rel="noreferrer">case study</a>}
        </li>
        <li>
        {project.link && <a href={project.link} target='_blank'  rel="noreferrer">web app</a>}
        </li>
        <li>
        {project.prototype && <a href={project.prototype} target='_blank'  rel="noreferrer">prototype</a>}
        </li>
        <li>
        {project.github && <a href={project.github} target='_blank' rel="noreferrer">code on github</a>}
        </li>
      </Links>
    </Panel>
  )
}