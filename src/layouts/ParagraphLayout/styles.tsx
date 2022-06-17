import styled from "styled-components";
import tw from "twin.macro";
import circleImage from "assets/images/circle-small.png";

export const Container = styled.article`
  ${tw`w-full`}
`;

export const HeadingContainer = styled.div`
  background-image: url(${circleImage});
  ${tw`bg-no-repeat bg-left-top`}
  ${tw`min-h-[82px] mb-5 relative`}
`;

export const Heading = styled.h3`
  ${tw`font-bold text-xxl absolute top-9 left-9`}
`;

export const MainTitle = styled.span`
  ${tw`text-tertiary`}
`;

export const CircleBackground = styled.div`
  ${tw`w-[82px] h-[82px] absolute -top-8 -left-6 z-[-1] rounded-full bg-pink`}
`;

export const Content = styled.section`
  ${tw``}
`;

// background-image: url(${circleImage});
