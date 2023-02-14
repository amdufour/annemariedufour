import React from 'react'
import { Link } from 'gatsby'

const projectsInfo = [
  {
    id: 1,
    class: 'project-decade-review',
    title: 'A Decade in Review',
    readmore: 'Explore the project',
    support: 'digital',
    link: 'https://amdufour.github.io/decade-in-review/',
    external: true
  },
  {
    id: 2,
    class: 'project-mayu',
    title: 'Mayu',
    readmore: 'Explore the project',
    support: 'digital, created in collaboration with Inbal Rief',
    link: 'https://mayustorybook.life/',
    external: true
  },
  {
    id: 3,
    class: 'project-foodprint',
    title: 'Your Daily Foodprint',
    readmore: 'Explore the project',
    support: 'digital',
    link: 'https://amdufour.github.io/your-daily-foodprint/',
    external: true
  },
  {
    id: 4,
    class: 'project-network',
    title: 'Organizations joining forces against polarization',
    support: 'digital',
    readmore: 'Learn more',
    link: '/projects/organizations-against-polarization',
    external: false
  },
  {
    id: 5,
    class: 'project-astronauts',
    title: 'The Cohorts of NASA astronauts',
    support: 'digital',
    readmore: 'Explore the project',
    link: 'https://amdufour.github.io/nasa-astronauts-cohorts/',
    external: true
  },
  {
    id: 6,
    class: 'project-music',
    title: 'Top 100 songs streamed on Spotify',
    support: 'digital',
    readmore: 'Explore the project',
    link: 'https://amdufour.github.io/spotify-hits/',
    external: true
  },
  {
    id: 7,
    class: 'project-oscars',
    title: 'So white, an evolution',
    readmore: 'Explore the project',
    support: 'digital',
    link: 'https://amdufour.github.io/so-white-an-evolution/',
    external: true
  },
  {
    id: 8,
    class: 'project-tennis-pay-gap',
    title: 'Exploring the Tennis gender pay gap in 2019',
    readmore: 'Explore the project',
    support: 'digital',
    link: 'https://amdufour.github.io/interactive-split-violin-plot-of-tennis-players-earnings-with-force-simulation/',
    external: true
  },
  {
    id: 9,
    class: 'project-nobel',
    title: 'A century of Nobel prizes',
    readmore: 'Explore the project',
    support: 'digital',
    link: 'https://amdufour.github.io/nobels/',
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
        <div className="more"><span className="more-text">{project.readmore}</span></div>
      </div>
      <div className="project-title">{project.title}</div>
      <div className="project-support">{project.support}</div>
    </Link>
  )
}

export default ProjectThumbnail