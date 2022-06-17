import React, { useState } from "react";
import { INavbar } from "types/Designs";
import { BarIcon, QuitIcon } from "../icons";
import {
  ContentContainer,
  ItemContainer,
  SlidingDoorButton,
  SlidingDoorContainer,
  SlidingDoorContent,
  NavItem,
  QuitButton,
  ItemList,
  Button,
} from "./styles";

interface ISlidingDoor {
  navItemList: INavbar[];
}

const SlidingDoor: React.FC<ISlidingDoor> = ({ navItemList }) => {
  const [showContent, setShowContent] = useState(false);

  const handleShow = () => {
    setShowContent(true);
  };

  const handleHidden = () => {
    setShowContent(false);
  };

  return (
    <SlidingDoorContainer>
      <SlidingDoorButton onClick={handleShow}>
        <BarIcon />
      </SlidingDoorButton>
      <SlidingDoorContent visible={showContent}>
        <QuitButton onClick={handleHidden}>
          <QuitIcon fill="#fff" />
        </QuitButton>
        <ContentContainer>
          <ItemList>
            {navItemList.map((nav) => (
              <ItemContainer key={nav.href}>
                <NavItem href={nav.href}>{nav.title}</NavItem>
              </ItemContainer>
            ))}
          </ItemList>
          <Button onClick={() => {}}>Sign in</Button>
        </ContentContainer>
      </SlidingDoorContent>
    </SlidingDoorContainer>
  );
};

export default SlidingDoor;
