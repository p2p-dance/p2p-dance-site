import React from "react"
import { Link } from "gatsby"
import p2pnodes from "../images/p2p-nodes.png"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 500,
      }}
    >
      <img src={p2pnodes} alt="p2p-nodes-graph" />
    </div>
  </Layout>
)

export default IndexPage
