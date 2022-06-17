import { ChangeEvent, forwardRef } from "react";
import { InputComponent, InputContainer, Label, ErrorMessage } from "./styles";

interface IInputProps {
  className?: string;
  id?: string;
  label?: string;
  type?: "text" | "number" | "password";
  placeholder?: string;
  value?: string;
  errorMessage?: string | undefined;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      id,
      label,
      type = "text",
      className,
      value,
      placeholder,
      errorMessage,
      onChange,
    },
    ref
  ) => {
    return (
      <InputContainer className={`relative ${className}`}>
        <Label htmlFor={id} errorMessage={errorMessage as string}>
          {label}
        </Label>
        <InputComponent
          id={id}
          type={type}
          placeholder={placeholder}
          ref={ref}
          onChange={onChange}
          value={value}
          spellCheck={false}
          errorMessage={errorMessage as string}
        />
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </InputContainer>
    );
  }
);

export default Input;
