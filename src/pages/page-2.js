import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

const SecondPage = () => (
  <>
    <Layout>
      <h1>My second page</h1>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  </>
)

export default SecondPage
