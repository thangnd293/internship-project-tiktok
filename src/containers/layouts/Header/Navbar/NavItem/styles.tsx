import styled from "styled-components";
import tw from "twin.macro";

export const NavItemContainer = styled.a<{ active?: boolean | false }>`
  ${tw`inline-flex w-[68px] h-[18px] laptop:w-[72px] laptop:h-[22px] items-center justify-center text-md laptop:text-lg relative `}

  ${({ active }) => (active ? tw`font-bold text-primary` : tw`text-body`)}

  ${({ active }) => active && "& span { width: 100% }"}
`;

export const BottomLine = styled.span`
  ${tw`group-hover:w-full absolute left-1/2 top-full w-0 h-[2px] bg-primary duration-200`}
`;
