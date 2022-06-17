import {
  ErrorMessage,
  OptionsContainer,
  QuestionLayoutContainer,
  Title,
} from "./styles";

interface IQuestionLayoutProps {
  title: string;
  className?: string;
  errorMessage?: string;
}

const QuestionLayout: React.FC<IQuestionLayoutProps> = ({
  title,
  className,
  errorMessage,
  children,
}) => {
  return (
    <QuestionLayoutContainer className={`${className ? className : ""}`}>
      <Title>{title}</Title>
      <OptionsContainer>
        {children}
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </OptionsContainer>
    </QuestionLayoutContainer>
  );
};

export default QuestionLayout;
