import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import green from "../images/green.jpg"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 400,
      }}
    >
      <h1>Uploading is as vital as downloading.</h1>

      <img src={green} width="400px" alt="green-gradient" />
    </div>
    <Link to="/">Go back</Link>
  </Layout>
)

export default SecondPage
