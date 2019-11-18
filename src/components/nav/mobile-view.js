import React from "react"
import styled from "@emotion/styled"
import { mq } from "../../styles"

import SidebarToggle from "./sidebar-toggle"

const MobileViewWrapper = styled.div`
  display: none;

  ${mq("small")} {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
  }
`

export default function MobileView({ showSidebar, setShowSidebar }) {
  return (
    <MobileViewWrapper>
      <SidebarToggle
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />
    </MobileViewWrapper>
  )
}
