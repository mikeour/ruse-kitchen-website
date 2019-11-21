import React from "react"

import { PageContainer } from "../components/shared"
import { ContactHeader, ContactForm } from "../components/contacts-page"

function ContactPage() {
  return (
    <PageContainer noSlideshow>
      <ContactHeader />
      <ContactForm />
    </PageContainer>
  )
}

export default ContactPage
