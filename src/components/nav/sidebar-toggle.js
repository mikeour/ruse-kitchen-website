import React from "react"
import styled from "@emotion/styled"
import { motion } from "framer-motion"

const SidebarToggleWrapper = styled(motion.div)`
  text-align: center;
  /* border: 1px solid cadetblue; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const StyledSVG = styled(motion.svg)`
  width: 25px;
  height: 25px;
  transform: scale(1.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
)

function SidebarToggle({ showSidebar, setShowSidebar }) {
  const toggleSidebar = () => setShowSidebar(prevState => !prevState)

  return (
    <SidebarToggleWrapper
      initial="closed"
      animate={showSidebar ? "open" : "closed"}
      onClick={toggleSidebar}
    >
      <StyledSVG viewBox="0 0 25 25">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </StyledSVG>
    </SidebarToggleWrapper>
  )
}

export default SidebarToggle
