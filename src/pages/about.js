import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Section from "../components/section"
import Layout from "../components/layout"
import Button from "../components/button"
import { css } from "@emotion/core"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { sourceInstanceName: { eq: "content" }, name: { eq: "about" } }
      ) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                text
                title
              }
            }
          }
        }
      }
    }
  `)

  const {
    title,
    text,
  } = data.allFile.edges[0].node.childMarkdownRemark.frontmatter

  return (
    <Layout>
      <div
        css={css`
          height: 5rem;
        `}
      ></div>
      <Section title={title}>
        <p>{text}</p> <Button>Menu</Button>
      </Section>
    </Layout>
  )
}

export default AboutPage
