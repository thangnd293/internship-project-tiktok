import styled from "styled-components";
import tw from "twin.macro";

import { IVariant } from ".";

const variants: Record<IVariant, any> = {
  primary: tw`text-secondary`,
  secondary: tw`text-tertiary`,
};

export const LinkContainter = styled.a<{ variant: IVariant }>`
  ${tw`flex cursor-pointer hover:underline`}
  ${({ variant }) => variants[variant]}
`;
