import {
  CircleButton as CircleButtonRadio,
  Radio,
  Label as LabelCheckbox,
} from "designs/RadioButton/styles";
import styled from "styled-components";
import tw from "twin.macro";

export const CheckboxContainer = styled.div`
  ${tw`flex gap-2.5 items-center`}
`;

export const Label = styled(LabelCheckbox)``;

export const CheckboxEl = styled(Radio)``;

export const CircleButton = styled(CircleButtonRadio)``;
