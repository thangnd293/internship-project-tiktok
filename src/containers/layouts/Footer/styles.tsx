import { Logo } from "assets/icons";
import styled from "styled-components";
import tw from "twin.macro";

export const FooterContainer = styled.footer`
  ${tw`w-full bg-primary text-xs laptop:text-md overflow-hidden`}
`;

export const FooterContent = styled.div`
  ${tw`w-full py-10 max-w-[1120px] mx-auto flex items-center justify-between gap-[44px] laptop:px-10 laptop:gap-[94px] px-5`}
`;

export const LeftContainer = styled.div`
  ${tw`flex flex-col laptop:flex-row gap-5 laptop:gap-0 justify-between items-center flex-1 laptop:flex-[0.65]`}
`;

export const LogoContainer = styled.div`
  ${tw`flex flex-col laptop:flex-row items-center gap-3`}
`;
export const LogoWrapper = styled(Logo)`
  ${tw`w-[73px] h-[30px] laptop:w-[91px] laptop:h-[37px]`}
`;

export const Copyright = styled.p`
  ${tw`text-white text-sm tablet:text-xs laptop:text-md`}
`;

export const SocialContainer = styled.div`
  ${tw`flex gap-5`}
`;

export const RightContainer = styled.div`
  ${tw`flex flex-col laptop:flex-row gap-5 justify-end items-center flex-1  laptop:flex-[0.35] self-center text-center`}
`;

export const Link = styled.a`
  ${tw`text-white`}
`;
