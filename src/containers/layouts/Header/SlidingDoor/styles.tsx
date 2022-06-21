import styled from "styled-components";
import tw from "twin.macro";

export const SlidingDoorContainer = styled.div``;

export const SlidingDoorContent = styled.div<{ visible?: boolean }>`
  ${tw`fixed top-0 right-0 w-screen h-screen bg-primary duration-300`}
  transform: translateX(100%);
  ${({ visible }) => visible && "transform: translateX(0);"}
`;

export const SlidingDoorButton = styled.div`
  ${tw``}
`;

export const QuitButton = styled.button`
  ${tw`ml-2.5 mt-2.5`}
`;

export const ContentContainer = styled.div`
  ${tw`flex flex-col h-full `}
`;

export const ItemList = styled.ul`
  ${tw`flex flex-col items-center mb-5`}
`;

export const ItemContainer = styled.li`
  ${tw`w-full h-12 text-center`}
`;

export const NavItem = styled.a`
  ${tw`inline-flex items-center justify-center w-full h-full text-white hover:text-primary hover:bg-white`}
`;

export const Button = styled.button`
  ${tw`w-2/3 mx-auto rounded-[40px] h-12 border border-solid border-white text-white`}
`;
