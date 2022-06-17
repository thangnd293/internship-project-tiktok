import styled from "styled-components";
import tw from "twin.macro";

export const RadioContainer = styled.div`
  ${tw``}
`;
//

export const Radio = styled.input`
  ${tw`hidden`}
  &:checked + label > span::before {
    background-color: #ff9100;
  }
`;

export const Label = styled.label`
  ${tw` text-xs text-body flex items-center gap-5 leading-[initial] cursor-pointer`}
`;

export const CircleButton = styled.span`
  ${tw`inline-block rounded-full border-2 border-solid border-[#01A6BA] w-5 h-5 relative flex-shrink-0`}
  ${tw`before:absolute before:top-1/2 before:left-1/2 before:p-[38%] before:rounded-full before:bg-none`}
  &::before {
    transform: translate(-50%, -50%);
  }
`;
