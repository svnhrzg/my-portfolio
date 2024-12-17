import React from 'react'
import Project from '../Project'
import { ProjectsList } from './styles'

export default function ProjectContainer({projects, pickProject}) {

  return (
      <ProjectsList>
        {projects.map((project, i) => (
          <Project key={project.id} project={project} pickProject={pickProject}/>
        ))}
      </ProjectsList>
  )
}