import styled from "styled-components";
import tw from "twin.macro";

export const FormContainer = styled.form`
  ${tw`w-full grid grid-cols-1 items-start auto-rows-min laptop:grid-cols-12 gap-x-2.5 my-[64px] laptop:my-[94px]`}
`;

export const TextContainer = styled.div`
  ${tw`mb-10 laptop:mb-0 laptop:col-span-5 laptop:max-w-[265px] flex-[3]`}
`;

export const InputContainer = styled.div`
  ${tw`grid justify-items-center laptop:col-start-6 laptop:col-end-13`}
`;

export const InputWrapper = styled.div`
  ${tw`w-full grid grid-cols-1 justify-items-center laptop:grid-cols-2 gap-5 `}
`;

export const BottomContainer = styled.div`
  ${tw`col-span-full grid grid-cols-1 laptop:grid-cols-2 gap-4 laptop:gap-8 pt-20`}
  grid-auto-rows: 1fr;
`;

export const ConditionContainer = styled.div`
  ${tw`flex flex-col gap-8`}
`;
