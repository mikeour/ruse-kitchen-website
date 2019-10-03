import React from "react"
import Layout from "../components/layout"
import Slideshow from "../components/slideshow"
import Insta from "../components/insta"

const Index = () => {
  return (
    <>
      <Layout>
        <Slideshow />

        {/* <h1>Welcome to Ruse Vegan Kitchen</h1>
        <p>Look at all my content.</p>
        <Link to="/page-2">Go to Page 2</Link> */}
        <Insta />
      </Layout>
    </>
  )
}

export default Index
