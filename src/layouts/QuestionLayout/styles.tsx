import styled from "styled-components";
import tw from "twin.macro";

export const QuestionLayoutContainer = styled.div`
  ${tw``}
`;

export const Title = styled.h5`
  ${tw`mb-5 font-bold`}
`;

export const OptionsContainer = styled.div`
  ${tw`flex flex-col gap-[15px]`}
`;

export const ErrorMessage = styled.p`
  ${tw`text-error`}
`;
