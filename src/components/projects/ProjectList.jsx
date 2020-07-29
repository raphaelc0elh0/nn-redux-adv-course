import React from 'react'
import ProjectSummary from './ProjectSummary'

const ProjectList = ({ projects }) => {
  const projectList = projects.length
    ? projects.map(project => <ProjectSummary key={project.id} project={project} />)
    : <p>NO projects found!</p>

  return (
    <div className="project-list section">
      {projectList}
    </div>
  )
}

export default ProjectList
