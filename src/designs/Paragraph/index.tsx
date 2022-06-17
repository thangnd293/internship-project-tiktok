import { ParagraphContainer } from "./styles";

interface IParagraphProps {
  className?: string;
}
const Paragraph: React.FC<IParagraphProps> = ({ className, children }) => {
  return (
    <ParagraphContainer className={className}>{children}</ParagraphContainer>
  );
};

export default Paragraph;
