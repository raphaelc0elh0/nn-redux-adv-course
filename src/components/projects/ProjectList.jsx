import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

const ProjectList = ({ projects }) => {
  const projectList = projects.length
    ? projects.map(project =>
      <Link key={project.id} to={`/project/${project.id}`}>
        <ProjectSummary project={project} />
      </Link>
    )
    : <p>NO projects found!</p>

  return (
    <div className="project-list section">
      {projectList}
    </div>
  )
}

export default ProjectList
