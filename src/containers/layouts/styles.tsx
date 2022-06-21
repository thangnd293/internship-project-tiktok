import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.div`
  ${tw`flex flex-col items-center w-full h-full bg-white`}
`;

export const Wrapper = styled.div`
  ${tw`w-full px-5 desktop:px-0 max-w-[1120px] flex-1 overflow-x-hidden`}
`;
