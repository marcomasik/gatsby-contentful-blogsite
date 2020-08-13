import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Sections from "../components/sections"
import "./index.scss"

//	import PagesMedium from "../components/PagesMedium"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <Sections />
  </Layout>
)

export default IndexPage
