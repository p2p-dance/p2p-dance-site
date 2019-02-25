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
        maxWidth: 400,
      }}
    >
      <img src={samus} width="400px" alt="metroid" />
    </div>
    <Link to="/page-2/">Next</Link>
  </Layout>
)

export default IndexPage
