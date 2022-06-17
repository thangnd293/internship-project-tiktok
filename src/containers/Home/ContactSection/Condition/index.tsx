import Checkbox from "designs/Checkbox";
import QuestionLayout from "layouts/QuestionLayout";
import { ICondition } from "..";
import { ErrorMessage } from "./styles";

interface IConditionProps {
  condition: ICondition;
  errorMessage?: string;
  className?: string;
  value?: boolean;
  onChange: (value: boolean) => void;
}

const Condition: React.FC<IConditionProps> = ({
  value,
  condition,
  errorMessage,
  onChange,
}) => {
  return (
    <QuestionLayout title={condition.title} className="relative">
      <Checkbox
        label={condition.content}
        id={condition.id}
        name={condition.id}
        checked={value}
        onChange={onChange}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </QuestionLayout>
  );
};

export default Condition;
