import React, { useState } from "react";
import { Global } from "@emotion/core";
import styled from "@emotion/styled";
import { globalStyles, flexMixin } from "@styles";
import { motion, AnimatePresence } from "framer-motion";

import Nav from "@components/nav/nav";
import Footer from "@components/footer/footer";
import Sidebar from "@components/sidebar/sidebar";

function Layout({ children, location }) {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Wrapper>
      <Global styles={globalStyles} />

      <Nav showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

      <AnimatePresence exitBeforeEnter>
        <MainContent
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          exit={{ opacity: 0 }}
        >
          {children}
        </MainContent>
      </AnimatePresence>

      <AnimatePresence>
        {showSidebar && <Sidebar setShowSidebar={setShowSidebar} />}
      </AnimatePresence>

      {/* <Footer /> */}
    </Wrapper>
  );
}

export default Layout;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  min-height: 100vh;
`;

const MainContent = styled(motion.main)`
  width: 100%;
`;
