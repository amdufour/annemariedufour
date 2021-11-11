import React from 'react'
import { Link } from 'gatsby'

const data = [
  {
    id: 1,
    text: 'home',
    url: '/'
  },
  {
    id: 2,
    text: 'my work',
    url: '/projects'
  },
  {
    id: 3,
    text: 'about',
    url: '/about/'
  },
  {
    id: 4,
    text: 'contact',
    url: '/contact/'
  },
]

export default ({ styleClass })=> {
  return (
    <ul className="main-navigation">
      {
        data.map((link, index) => {
          return (
            <li key={link.id}>
              <Link to={link.url}
                    className={index === (data.length - 1) ? "btn btn-white" : "nav-link"}
                    activeClassName="active">
                {link.text}
              </Link>
            </li>
          )
        })
      }
    </ul>
  )
}