import styled from "styled-components";
import tw from "twin.macro";

export const FooterContainer = styled.footer`
  ${tw`w-full bg-primary`}
`;

export const FooterContent = styled.div`
  ${tw`w-full py-10 max-w-[1100px] mx-auto flex items-center justify-between`}
`;

export const LeftContainer = styled.div`
  ${tw`flex flex-col laptop:flex-row items-center gap-3 flex-[0.45]`}
`;

export const Copyright = styled.p`
  ${tw`text-white`}
`;

export const SocialContainer = styled.div`
  ${tw`flex gap-5 flex-[0.2]`}
`;

export const RightContainer = styled.div`
  ${tw`flex flex-col laptop:flex-row gap-5 justify-end flex-[0.35] self-center`}
`;

export const Link = styled.a`
  ${tw`text-white`}
`;
