import React from 'react'
import { Link } from 'gatsby'

const projectsInfo = [
  {
    id: 1,
    class: 'project-network',
    title: 'Organizations joining forces against polarization',
    support: 'digital',
    readmore: 'Learn more',
    link: '/projects/organizations-against-polarization',
    external: false
  },
  {
    id: 2,
    class: 'project-music',
    title: 'Top 100 songs streamed on Spotify',
    support: 'digital',
    readmore: 'Explore the project',
    link: 'https://amdufour.github.io/spotify-hits/',
    external: true
  },
  {
    id: 3,
    class: 'project-foodprint',
    title: 'Daily Foodprint',
    readmore: 'Explore the project',
    support: 'digital',
    link: '/',
    external: true
  },
  {
    id: 4,
    class: 'project-nobel',
    title: 'A century of Nobel prizes',
    readmore: 'Explore the project',
    support: 'digital',
    link: '/',
    external: true
  },
]


const ProjectThumbnail = ({projectId}) => {
  const project = projectsInfo.find(project => project.id === projectId)

  return (
    <Link className={`project ${project.class}`}
          to={project.link}
          target={project.external ? '_blank' : '_self'}>
      <div className="project-thumbnail">
        <div className="more">{project.readmore}</div>
      </div>
      <div className="project-title">{project.title}</div>
      <div className="project-support">{project.support}</div>
    </Link>
  )
}

export default ProjectThumbnail