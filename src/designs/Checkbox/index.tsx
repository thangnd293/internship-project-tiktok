import { ChangeEvent, useEffect, useState } from "react";
import { CheckboxContainer, CheckboxEl, CircleButton, Label } from "./styles";

interface ICheckboxProps {
  className?: string;
  label: string;
  name: string;
  id: string;
  checked?: boolean;
  onChange: (value: boolean) => void;
}

const Checkbox: React.FC<ICheckboxProps> = ({
  className,
  label,
  name,
  id,
  checked = false,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(checked);
  useEffect(() => {
    onChange(isChecked);
  }, [isChecked]);
  return (
    <CheckboxContainer className={className}>
      <CheckboxEl
        type="checkbox"
        name={name}
        id={id}
        checked={isChecked}
        onChange={() => {
          setIsChecked((prev) => !prev);
        }}
      />
      <Label htmlFor={id}>
        <CircleButton />
        {label}
      </Label>
    </CheckboxContainer>
  );
};

export default Checkbox;
