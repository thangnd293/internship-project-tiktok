import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import { INavbar } from "types/Designs";
import Button from "components/Button";
import Navbar from "./Navbar";
import SlidingDoor from "./SlidingDoor";
import {
  HeaderContainer,
  HeaderContent,
  LogoContainer,
  RightSection,
  RightSectionMobile,
} from "./styles";

const NAV_ITEMS: INavbar[] = [
  {
    href: "#aboutus",
    title: "About us",
  },
  {
    href: "#activities",
    title: "Activities",
  },
  {
    href: "#download",
    title: "Download",
  },
  {
    href: "#contact",
    title: "Contact",
  },
];

const Header: React.FC = () => {
  const isLaptop = useMediaQuery({ query: "(min-width: 640px)" });
  const [hasScroll, setHasScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScroll(true);
      } else {
        setHasScroll(false);
      }
    };
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const rightSection = isLaptop ? (
    <RightSection>
      <Navbar navbarList={NAV_ITEMS} />
      <Button variant="secondary" size="small" onClick={() => {}}>
        Sign in
      </Button>
    </RightSection>
  ) : (
    <RightSectionMobile>
      <SlidingDoor navItemList={NAV_ITEMS} />
    </RightSectionMobile>
  );

  return (
    <HeaderContainer hasScroll={hasScroll}>
      <HeaderContent>
        <LogoContainer />
        {rightSection}
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
