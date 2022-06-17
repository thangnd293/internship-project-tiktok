import React from "react";

import Home from "../Home";
import Footer from "./Footer";
import Header from "./Header";
import { Container, Wrapper } from "./styles";

const Layout: React.FC = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <div className="content">
          <Home />
        </div>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Layout;
