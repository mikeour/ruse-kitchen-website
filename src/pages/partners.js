import React from "react";

import { PageContainer, Slideshow } from "@components/shared";
import { PartnersHeader, Partner } from "@components/partners-page";

function PartnersPage() {
  return (
    <>
      {/* <Slideshow /> */}
      <PageContainer noSlideshow>
        <PartnersHeader />
        <Partner
          name={"Pure Health Foods"}
          address={"7575 W. Washington #129 Las Vegas, NV 89128"}
          phone={"702-366-9297"}
          hours={"Monday - Saturday 9:00 am to 7:00 pm Closed Sunday"}
          description={`Pure Health Foods is a local health food store where you can purchase our pre-packaged meat. Here, we sell our plant-based gyro, spicy Italian sausage and our charbroiled steak to take home!`}
        />
        <Partner
          name={"Grouchy John's Coffee Shop"}
          address={"8520 S. Maryland Pkwy"}
          description={`Grouchy John's sells our plant-based steak and pesto wrap! Filled with charbroiled steak, sauteed peppers and onions and a zesty pesto sauce.`}
        />
        <Partner
          name={"Pure Health Foods"}
          address={"7575 W. Washington #129 Las Vegas, NV 89128"}
          phone={"702-366-9297"}
          hours={"Monday - Saturday 9:00 am to 7:00 pm Closed Sunday"}
          description={`Pure Health Foods is a local health food store where you can purchase our pre-packaged meat. Here, we sell our plant-based gyro, spicy Italian sausage and our charbroiled steak to take home!`}
        />
        <Partner
          name={"Grouchy John's Coffee Shop"}
          address={"8520 S. Maryland Pkwy"}
          description={`Grouchy John's sells our plant-based steak and pesto wrap! Filled with charbroiled steak, sauteed peppers and onions and a zesty pesto sauce.`}
        />
      </PageContainer>
    </>
  );
}

export default PartnersPage;
