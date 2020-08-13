import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

export const query = graphql`
  query section {
    allContentfulSection {
      nodes {
        title
        heroImage {
          fluid(maxWidth: 750) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

const section = props => {
  return (
    <Layout>
      <SEO title={props.data.allContentfulSection.title} />
      <div className="content">
        {props.data.allContentfulSection.heroImage && (
          <Img
            className="featured"
            fluid={props.data.allContentfulSection.heroImage.fluid}
            alt={props.data.allContentfulSection.title}
          />
        )}
      </div>
      <h1>{props.data.allContentfulSection.title}</h1>
    </Layout>
  )
}

export default section