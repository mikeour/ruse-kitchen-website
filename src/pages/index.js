import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout.js"

const Index = () => (
  <>
    <Layout>
      <h1>Welcome to Ruse Vegan Kitchen</h1>
      <p>Look at all my content.</p>
      <Link to="/page-2">Go to Page 2</Link>
    </Layout>
  </>
)

export default Index
