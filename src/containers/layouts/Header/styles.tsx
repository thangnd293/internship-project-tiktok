import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "assets/icons";

export const HeaderContainer = styled.div<{ hasScroll: boolean }>`
  ${tw`fixed w-full bg-white z-[99999]`}
  ${({ hasScroll }) => hasScroll && tw`shadow-sm z-[999]`}
`;

export const HeaderContent = styled.header`
  ${tw`w-full max-w-[1120px] h-[60px] mx-auto px-5 desktop:px-0 laptop:h-[80px] flex justify-between items-center`}
`;

export const RightSection = styled.div`
  ${tw`flex items-center gap-[20px] laptop:gap-[30px]`}
`;

export const RightSectionMobile = styled.div`
  ${tw`overflow-hidden`}
`;

export const LogoContainer = styled(Logo)`
  ${tw`w-[77px] h-[28px] laptop:w-[91px] laptop:h-[33px]`}
`;
