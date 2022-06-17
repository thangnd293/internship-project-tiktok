import { LeftArrowIcon } from "assets/icons";
import { LinkContainter } from "./styles";

export type IVariant = "primary" | "secondary";

interface ILinkProps {
  variant?: IVariant;
  className?: string;
}

const Link: React.FC<ILinkProps> = ({
  variant = "primary",
  className,
  children,
}) => {
  return (
    <LinkContainter className={className} variant={variant} href="#">
      {children} <LeftArrowIcon color="currentColor" />
    </LinkContainter>
  );
};

export default Link;
