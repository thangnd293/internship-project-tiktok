import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { INavbar } from "types/Designs";
import NavItem from "./NavItem";

interface NavbarProps {
  navbarList: INavbar[];
}

const NavbarList = styled.ul`
  ${tw`list-none flex gap-3.5 laptop:gap-5`}
`;

const Navbar: React.FC<NavbarProps> = ({ navbarList }) => {
  const [currentNav, setCurrentNav] = useState("");

  return (
    <NavbarList>
      {navbarList.map(({ href, title }) => (
        <NavItem
          key={title}
          href={href}
          active={currentNav === title}
          handleClick={(title) => {
            setCurrentNav(title);
          }}
        >
          {title}
        </NavItem>
      ))}
    </NavbarList>
  );
};

export default Navbar;
