import React from 'react'
import { Link } from 'gatsby'

const data = [
  {
    id: 1,
    text: 'portfolio',
    url: '#portfolio'
  },
  {
    id: 2,
    text: 'about',
    url: '/about/'
  },
  {
    id: 3,
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
                    className={index === (data.length - 1) ? "btn" : null}>
                {link.text}
              </Link>
            </li>
          )
        })
      }
    </ul>
  )
}