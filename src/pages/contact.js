import React from "react";

import { PageContainer } from "../components/shared";
import {
  ContactWrapper,
  ContactHeader,
  ContactForm
} from "../components/contacts-page";

function ContactPage() {
  return (
    <PageContainer noSlideshow>
      <ContactWrapper>
        <ContactHeader />
        <ContactForm />
      </ContactWrapper>
    </PageContainer>
  );
}

export default ContactPage;
