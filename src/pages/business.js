import React from "react";

import { PageContainer } from "@components/shared";
import {
  BusinessHeader,
  BusinessForm,
  BusinessWrapper
} from "@components/business-page";

function BusinessPage() {
  return (
    <PageContainer noSlideshow>
      <BusinessWrapper>
        <BusinessHeader />
        <BusinessForm />
      </BusinessWrapper>
    </PageContainer>
  );
}

export default BusinessPage;
