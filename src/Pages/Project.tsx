import React from 'react'
import { useParams } from 'react-router'
import useProject from '../hooks/usePoject'
import Loading from '../UI/Loading'
import ProjectHeader from '../Features/Projects/ProjectsHeader'

function Project() {
  const {isLoading,project} =useProject()

  if (isLoading) return <Loading height={50} width={30}/>
  return (
    <div>
      <ProjectHeader project={project}/>
      <ProjectHeader proposals={project.proposals}/>
    </div>
  )
}

export default Project