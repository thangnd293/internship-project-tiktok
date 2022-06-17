import styled from "styled-components";
import tw from "twin.macro";

export const SelectContainer = styled.div`
  ${tw`w-full max-w-[745px] relative`}
`;

export const Label = styled.span<{ errorMessage: string }>`
  ${tw`inline-block mb-[5px] font-medium`}

  ${({ errorMessage }) => errorMessage && tw`text-error`}
`;

export const SelectContent = styled.div<{
  visible: boolean;
  errorMessage: string | undefined;
}>`
  ${tw`w-full flex text-md text-placeholder select-none
    border border-solid border-light-grey rounded-[40px] 
    py-3 pl-4 pr-2.5 laptop:py-4 laptop:pl-5 laptop:pr-3.5
  `}

  ${({ visible }) => visible && tw`border-focus`}

  ${({ errorMessage }) =>
    errorMessage && tw`text-error border-error focus:border-error`}
`;

export const SelectValue = styled.span<{ errorMessage: string }>`
  ${tw`flex-1 whitespace-nowrap overflow-hidden`}

  ${({ errorMessage }) => errorMessage && tw`text-error`}
`;
export const OptionWrapper = styled.div<{ visible: boolean }>`
  ${tw`w-full max-h-[300px] overflow-auto shadow-lg h-0 bg-white rounded select-none invisible opacity-0 duration-200 ease-linear
    absolute top-full left-0 mt-1 z-50 
  `}

  ${({ visible }) => visible && tw`h-auto visible opacity-100`}
`;

export const OptionList = styled.ul`
  ${tw`w-full h-full overflow-auto `}
`;

export const Option = styled.li`
  ${tw`py-3 px-4 laptop:py-4 laptop:px-3 text-body hover:bg-focus hover:text-white `}
`;

export const ErrorMessage = styled.p`
  ${tw`absolute top-[106%] left-6 text-xs text-error`}
`;
