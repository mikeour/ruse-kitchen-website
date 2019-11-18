import React from "react"

import { PageContainer, Slideshow } from "../components/shared"
import { PartnersHeader } from "../components/partners-page"

function PartnersPage() {
  return (
    <>
      {/* <Slideshow /> */}
      <PageContainer noSlideshow>
        <PartnersHeader />
      </PageContainer>
    </>
  )
}

export default PartnersPage
