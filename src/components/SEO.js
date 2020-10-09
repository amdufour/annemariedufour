import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDescription: description
        siteTitle: title
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const {site} = useStaticQuery(query);
  const {siteDescription, siteTitle} = site.siteMetadata;
  const pageTitle = title === undefined ? siteTitle : `${title} | ${siteTitle}`;

  return <Helmet htmlAttributes={{lang: "en"}} title={pageTitle} >
    <meta name="description" content={description || siteDescription} />
  </Helmet>
}

export default SEO