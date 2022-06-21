import styled from "styled-components";
import tw from "twin.macro";

export const AboutContainer = styled.section`
  ${tw`w-full max-w-[1120] flex flex-col gap-12 laptop:gap-20 desktop:gap-[5.5rem] laptop:flex-row laptop:py-[84px] overflow-hidden`}
`;

export const LeftContainer = styled.div`
  ${tw`laptop:flex-[1.2]`}
`;

export const VideoContent = styled.div`
  aspect-ratio: 15 / 9;
  ${tw``}
`;

export const VideoTitle = styled.h4`
  ${tw`mt-5 font-bold`}
`;

export const RightContainer = styled.div`
  ${tw`flex justify-end laptop:flex-[0.8] `}
`;

export const AboutContent = styled.div`
  ${tw`w-full laptop:max-w-[455px] `}
`;

export const SubTitle = styled.h4`
  ${tw`mb-5`}
`;
