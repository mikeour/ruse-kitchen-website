import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"
import { mq } from "../styles"

import { Slideshow, PageContainer } from "../components/shared"
import { PopUp, PopUpHeader, PopUpWrapper } from "../components/popups-page"

function renderPopups(popups) {
  return (
    <>
      {popups &&
        popups.map(eventInfo => (
          <PopUp key={eventInfo.map_url} {...eventInfo} />
        ))}
    </>
  )
}

function PopupsPage() {
  const { popups } = useStaticQuery(graphql`
    query {
      popups: allFile(
        filter: {
          sourceInstanceName: { regex: "/content/" }
          relativeDirectory: { eq: "pop-up-events" }
        }
        sort: {
          fields: childMarkdownRemark___frontmatter___position
          order: ASC
        }
      ) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                description
                title
                day
                date
                address
                time
                map_url
              }
            }
          }
        }
      }
    }
  `)

  const events = popups.edges.map(
    popup => popup.node.childMarkdownRemark.frontmatter
  )

  return (
    <>
      <Slideshow />
      <PageContainer>
        <PopUpHeader />
        <PopUpWrapper>{renderPopups(events)}</PopUpWrapper>
      </PageContainer>
    </>
  )
}

export default PopupsPage
