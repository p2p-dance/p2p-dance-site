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
      <h1>contact info</h1>
      <a href="mailto:hello@pulse-code.com">hello@pulse-code.com</a>
      <br />
    </div>
    <Link to="/">back</Link>
  </Layout>
)

export default SecondPage
