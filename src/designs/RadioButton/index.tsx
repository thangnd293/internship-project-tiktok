import { ChangeEvent } from "react";
import { CircleButton, Label, Radio, RadioContainer } from "./styles";

interface IRadioButtonProps {
  className?: string;
  label: string;
  name: string;
  id: string;
  value: string;
  checked?: boolean;
  onSelect?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton: React.FC<IRadioButtonProps> = ({
  className,
  id,
  label,
  name,
  value,
  checked,
  onSelect,
}) => {
  return (
    <RadioContainer className={className}>
      <Radio
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={onSelect}
        checked={checked}
      />
      <Label htmlFor={id}>
        <CircleButton />
        {label}
      </Label>
    </RadioContainer>
  );
};

export default RadioButton;
