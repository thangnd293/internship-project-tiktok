import { useState, ChangeEvent, useEffect, useCallback } from "react";
import RadioButton from "designs/RadioButton";
import QuestionLayout from "layouts/QuestionLayout";

export interface IOption {
  id: number | undefined;
  value: string;
}

export interface IQuestion {
  id: number;
  key: string;
  title: string;
  options: IOption[];
}

interface IQuestionProps {
  question: IQuestion;
  className?: string;
  value: string;
  errorMessage?: string;
  onChange: (value: string) => void;
}

const Question: React.FC<IQuestionProps> = ({
  className,
  question,
  errorMessage,
  value,
  onChange,
}) => {
  const [currentValue, setCurrentValue] = useState(value);

  const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) return;

    setCurrentValue(e.target.value);
  };

  useEffect(() => {
    if (!currentValue) {
      return;
    }
    onChange(currentValue);
  }, [currentValue]);

  return (
    <QuestionLayout
      className={`${className ? className : ""} relative`}
      title={question.title}
      errorMessage={errorMessage ? errorMessage : ""}
    >
      {question.options.map((option) => {
        const id = `${question.key}-${option.id}`;
        return (
          <RadioButton
            key={id}
            label={option.value}
            id={id}
            name={question.key}
            value={`${option.id}`}
            checked={+currentValue === option.id}
            onSelect={handleSelect}
          />
        );
      })}
    </QuestionLayout>
  );
};

export default Question;
