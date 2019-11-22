import React from "react"

import { PageContainer } from "../components/shared"
import { BusinessHeader, BusinessForm } from "../components/business-page"

function BusinessPage() {
  return (
    <PageContainer noSlideshow>
      <BusinessHeader />
      <BusinessForm />
    </PageContainer>
  )
}

export default BusinessPage
