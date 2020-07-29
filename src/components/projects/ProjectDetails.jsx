import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores neque necessitatibus, ipsa quos vel mollitia sapiente officiis et ullam, dolor, ipsam a expedita qui ex! Aut perferendis accusamus tenetur molestiae?</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by the Next Ninja</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
