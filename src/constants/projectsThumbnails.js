import React from 'react'
import { Link } from 'gatsby'

const projectsInfo = [
  {
    id: 1,
    class: 'project-network',
    title: 'Organizations joining forces against polarization',
    support: 'digital',
    link: '/projects/organizations-against-polarization'
  },
  {
    id: 2,
    class: 'project-music',
    title: 'Top 100 songs streamed on Spotify',
    support: 'digital',
    link: '/'
  },
  {
    id: 3,
    class: 'project-foodprint',
    title: 'Daily Foodprint',
    support: 'digital',
    link: '/'
  },
  {
    id: 4,
    class: 'project-nobel',
    title: 'A century of Nobel prizes',
    support: 'digital',
    link: '/'
  },
]


const ProjectThumbnail = ({projectId}) => {
  const project = projectsInfo.find(project => project.id === projectId)

  return (
    <Link className={`project ${project.class}`} to={project.link}>
      <div className="project-thumbnail">
        <div className="more">Explore the project</div>
      </div>
      <div className="project-title">{project.title}</div>
      <div className="project-support">{project.support}</div>
    </Link>
  )
}

export default ProjectThumbnail