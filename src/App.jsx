import React, { useState } from 'react'
import {GlobalStyle} from './styles'
import Header from './components/Header'
import projects from '../src/local-json/projects.json'
import Hero from './components/Hero'
import ProjectContainer from './components/ProjectContainer'
import Education from './components/Education'

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null)

  const pickProject = (project) => {
    setSelectedProject(project)
  }

  return (
    <>
      <GlobalStyle/>
      <Header />
      <Hero />
      <ProjectContainer projects={projects} pickProject={pickProject} project={selectedProject} />
      <Education />
    </>
  )
} 