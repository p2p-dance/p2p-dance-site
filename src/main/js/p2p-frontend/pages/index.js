import Layout from "../components/Layout.js"
import Link from "next/link"

const Index = () => (
  <Layout>
    <div>
      <h1>Hello world - p2p.dance</h1>
      <img src="/static/img/p2p.png" alt="mario logo" />
    </div>
  </Layout>
)

// Index.getInitialProps = async function() {
//   // graphQL reqs go here and are passed down as props to comps
// }

export default Index
