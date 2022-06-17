import styled from "styled-components";
import tw from "twin.macro";

export const SpeakerContainer = styled.section`
  ${tw`w-full grid laptop:grid-cols-12 gap-2.5 mb-40`}
`;

export const TitleContainer = styled.div`
  ${tw`laptop:col-span-3`}
`;

export const ContentContainer = styled.div`
  ${tw`grid grid-cols-3 gap-5 laptop:col-start-5 laptop:col-end-13`}
`;
