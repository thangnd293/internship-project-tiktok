import styled from "styled-components";
import tw from "twin.macro";

export const SpeakerContainer = styled.section`
  ${tw`w-full grid laptop:grid-cols-12 gap-2.5 mb-20 laptop:mb-40`}
`;

export const TitleContainer = styled.div`
  ${tw`laptop:col-span-4 mb-10 laptop:mb-0`}
`;

export const SliderBox = styled.div`
  ${tw`w-full laptop:col-start-6 laptop:col-end-13 overflow-x-hidden relative`}
`;

export const ContentContainer = styled.div`
  ${tw`flex`}
  ${tw`tablet:grid tablet:gap-5 tablet:grid-cols-3 laptop:grid-cols-2 desktop:grid-cols-3 laptop:gap-5 `}
`;

export const Button = styled.button`
  ${tw`absolute top-1/2 py-5 bg-[#ffffff50] rounded-sm`}
`;
