import React from "react";
import { BottomLine, NavItemContainer } from "./styles";

interface NavItemProps {
  href: string;
  children: string;
  active: boolean;
  handleClick: (title: string) => void;
}

const NavItem: React.FC<NavItemProps> = ({
  href,
  active,
  children,
  handleClick,
}) => {
  return (
    <NavItemContainer
      active={active}
      href={href}
      className="group"
      onClick={() => {
        handleClick(children);
      }}
    >
      {children}
      <BottomLine className="-translate-x-1/2" />
    </NavItemContainer>
  );
};

export default NavItem;
