import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

import BlogPost_BLACK from "../components/BlogPost_BLACK.js"
import BlogPost_WHITE from "../components/BlogPost_WHITE.js"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "Do MMMM, YYYY")
      featuredImage {
        fluid(maxWidth: 750) {
          ...GatsbyContentfulFluid
        }
      }
      type
    }
  }
`


const BlogPost = props => { 

  function renderComponent(){
    switch(props.data.contentfulBlogPost.type){
        case 'black': return <BlogPost_BLACK />
        case 'white': return <BlogPost_WHITE />
        default: return <BlogPost_BLACK />
    }
  }

  return (
    renderComponent()
  )
}

export default BlogPost