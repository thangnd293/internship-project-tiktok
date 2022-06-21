import React from "react";
import { FacebookIcon, TwitterIcon, YoutubeIcon } from "./icons";
import {
  Copyright,
  FooterContainer,
  FooterContent,
  LeftContainer,
  Link,
  LogoContainer,
  LogoWrapper,
  RightContainer,
  SocialContainer,
} from "./styles";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterContainer>
      <FooterContent>
        <LeftContainer>
          <LogoContainer>
            <LogoWrapper className="text-white" />
            <Copyright>{`© ${currentYear}, TiTok For Business`}</Copyright>
          </LogoContainer>

          <SocialContainer>
            <FacebookIcon />
            <TwitterIcon />
            <YoutubeIcon />
          </SocialContainer>
        </LeftContainer>

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
