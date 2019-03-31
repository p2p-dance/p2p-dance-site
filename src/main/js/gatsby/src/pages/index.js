import React, { useState } from "react"
import { Link } from "gatsby"
import hax from "../images/hax.jpg"
import p2pnodes from "../images/p2p-nodes.png"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 500,
        }}
      >
        <img src={p2pnodes} alt="p2p-nodes-graph" />
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    </Layout>
  )
}

export default IndexPage
