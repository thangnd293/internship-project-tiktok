import styled from "styled-components";
import tw from "twin.macro";
import { ISize, IVariant } from ".";

const variants: Record<IVariant, any> = {
  primary: tw`text-white bg-primary hover:text-primary hover:bg-white`,
  secondary: tw`text-primary bg-white hover:text-white hover:bg-primary`,
};
// tertiary: tw`rounded-[0px]  hover:text-primary hover:bg-white`,

const sizes: Record<ISize, any> = {
  small: tw`min-w-[110px] px-3.5 py-1.5 laptop:min-w-[140px] laptop:px-5 laptop:py-2.5 font-normal`,
  medium: tw`min-w-[140px] px-7 py-2.5 laptop:min-w-[170px] laptop:px-10 laptop:py-3.5 font-semibold`,
};

export const ButtonContainer = styled.button<{
  variant: IVariant;
  size: ISize;
}>`
  ${tw`rounded-[40px] border border-solid text-white bg-primary border-primary duration-200`}

  ${({ size }) => sizes[size]}
  ${({ variant }) => variants[variant]}
`;
