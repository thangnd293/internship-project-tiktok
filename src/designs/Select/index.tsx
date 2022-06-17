import { useEffect, useRef, useState } from "react";
import { ArrowIcon } from "./icons";
import {
  ErrorMessage,
  Label,
  Option,
  OptionList,
  OptionWrapper,
  SelectContainer,
  SelectContent,
  SelectValue,
} from "./styles";

export interface ISelectValue {
  id: number;
  value: string;
}

interface ISelectProps {
  optionList: ISelectValue[];
  label: string;
  id: string;
  value?: string;
  placeholder?: string;
  errorMessage?: string;
  className?: string;
  onChange: (value: string) => void;
}

const Select: React.FC<ISelectProps> = ({
  optionList,
  id,
  label,
  value,
  placeholder,
  errorMessage,
  className,
  onChange,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [currentValue, setCurrentValue] = useState(value);
  const selectContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClick = (e: globalThis.MouseEvent) => {
      if (!selectContainer.current) return;
      const isOutside = !selectContainer.current.contains(e.target as any);
      if (showOptions && isOutside) {
        setShowOptions(!showOptions);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [showOptions]);

  useEffect(() => {
    if (!currentValue) return;

    onChange(currentValue as string);
  }, [currentValue]);

  return (
    <SelectContainer
      className={className}
      id={id}
      ref={selectContainer}
      onClick={() => {
        setShowOptions(!showOptions);
      }}
    >
      <Label errorMessage={errorMessage as string}>{label}</Label>
      <SelectContent visible={showOptions} errorMessage={errorMessage}>
        <SelectValue
          errorMessage={errorMessage as string}
          className={`text-ellipsis ${!currentValue ? "text-body" : ""}`}
        >
          {(currentValue && optionList[+currentValue].value) || placeholder}
        </SelectValue>
        <ArrowIcon className={`${showOptions ? "rotate-180" : ""}`} />
      </SelectContent>
      <OptionWrapper visible={showOptions}>
        <OptionList>
          {optionList.map((option) => (
            <Option
              key={option.id}
              className="text-ellipsis"
              onClick={() => {
                setCurrentValue(`${option.id}`);
              }}
            >
              {option.value}
            </Option>
          ))}
        </OptionList>
      </OptionWrapper>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </SelectContainer>
  );
};

export default Select;
