import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import samus from "../images/samus.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 500,
      }}
    >
      <h1> open source excursions into hypermedia coming soon... </h1>
      <Link to="/page-2/">next</Link>
    </div>
  </Layout>
)

export default IndexPage
