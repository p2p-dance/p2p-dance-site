import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 500,
      }}
    >
      <h1>uploading is as vital as downloading</h1>
      <Link to="/">back</Link>
    </div>
  </Layout>
)

export default SecondPage
