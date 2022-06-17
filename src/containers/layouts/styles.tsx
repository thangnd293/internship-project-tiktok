import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.div`
  ${tw`flex flex-col items-center w-full h-screen`}
`;

export const Wrapper = styled.div`
  ${tw`w-full px-2.5 desktop:max-w-[1120px] flex-1`}
`;
