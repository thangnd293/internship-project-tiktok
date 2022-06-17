import {
  Container,
  Content,
  Heading,
  HeadingContainer,
  MainTitle,
} from "./styles";

interface IParagraphLayoutProps {
  mainTitle: string;
  subTitle: string;
  className?: string;
}

const ParagraphLayout: React.FC<IParagraphLayoutProps> = ({
  mainTitle,
  subTitle,
  className,
  children,
}) => {
  return (
    <Container className={className}>
      <HeadingContainer>
        <Heading>
          <MainTitle>{mainTitle} </MainTitle>
          {subTitle}
        </Heading>
      </HeadingContainer>
      <Content>{children}</Content>
    </Container>
  );
};

export default ParagraphLayout;
