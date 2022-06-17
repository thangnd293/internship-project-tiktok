import styled from "styled-components";
import tw from "twin.macro";
import landingImage from "assets/images/landing-section.png";

export const LandingContainer = styled.section`
  background-image: url(${landingImage});
  ${tw`bg-no-repeat bg-right bg-contain overflow-hidden`}
  ${tw`flex justify-center laptop:justify-start w-full mt-[30px] pb-[50px] laptop:mt-[70px] laptop:pb-[140px]`};
`;

export const LandingContent = styled.div`
  ${tw`max-w-[600px] laptop:max-w-[510px] relative`}
`;

export const CalendarContainer = styled.div`
  ${tw` flex gap-3 items-center mb-5`}
`;

export const CalendarTitle = styled.p`
  ${tw`font-bold text-secondary`}
`;

export const Heading = styled.h2`
  ${tw`text-3xl laptop:text-4xl font-bold mb-10`}
`;

export const HightlightText = styled.span`
  ${tw`text-tertiary `}
`;

export const ActionContainer = styled.div`
  ${tw`flex flex-col items-center  laptop:flex-row laptop:justify-start gap-1 laptop:gap-5 laptop:items-center`}
`;

export const ButtonDownload = styled.button`
  ${tw` flex items-center justify-center w-10 h-10 rounded-full border-2 border-solid border-tertiary duration-200
  hover:text-white hover:bg-tertiary      
  `}
`;

export const ButtonDownloadLarge = styled.button`
  ${tw` flex items-center justify-center w-3/4 h-10 rounded-full border-2 border-solid border-tertiary duration-200
  hover:text-white hover:bg-tertiary      
  `}
`;

export const ButtonTitle = styled.span`
  ${tw`text-tertiary font-bold hover:text-white`}
`;

export const CircleImageContainer = styled.div`
  ${tw`rounded-full absolute top-0 -right-8 z-[-1]`}
`;
