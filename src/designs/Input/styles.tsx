import styled from "styled-components";
import tw from "twin.macro";

export const InputContainer = styled.div`
  ${tw`w-full max-w-[745px]`}
`;

export const Label = styled.label<{ errorMessage: string }>`
  ${tw`block font-medium mb-[5px]`}

  ${({ errorMessage }) => errorMessage && tw`text-error`}
`;

export const InputComponent = styled.input<{ errorMessage: string }>`
  ${tw`w-full block border border-solid border-light-grey rounded-[40px] 
  py-3 px-4 laptop:py-4 laptop:px-5 focus:border-focus
  text-xs laptop:text-md text-body placeholder:text-placeholder
  `}

  ${({ errorMessage }) =>
    errorMessage &&
    tw`text-error border-error focus:border-error placeholder:text-error`}
`;

export const ErrorMessage = styled.p`
  ${tw`absolute top-[105%] text-xs text-error`}
`;
