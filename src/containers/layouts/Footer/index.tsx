import { Logo } from "assets/icons";
import React from "react";
import { FacebookIcon, TwitterIcon, YoutubeIcon } from "./icons";
import {
  Copyright,
  FooterContainer,
  FooterContent,
  LeftContainer,
  Link,
  RightContainer,
  SocialContainer,
} from "./styles";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterContainer>
      <FooterContent>
        <LeftContainer>
          <Logo className="text-white" />
          <Copyright>{`© ${currentYear}, TiTok For Business`}</Copyright>
        </LeftContainer>
        <SocialContainer>
          <FacebookIcon />
          <TwitterIcon />
          <YoutubeIcon />
        </SocialContainer>
        <RightContainer>
          <Link>Privacy Policy</Link>
          <Link>Terms &amp; Conditions</Link>
          <Link>Support</Link>
        </RightContainer>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
