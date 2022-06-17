import React, { ReactNode } from "react";
import { ButtonContainer } from "./styles";

export type IVariant = "primary" | "secondary";
export type ISize = "small" | "medium";

interface IButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  variant?: IVariant;
  size?: ISize;
  className?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
  onClick?: () => void;
}

const Button: React.FC<IButtonProps> = ({
  variant = "primary",
  size = "medium",
  type,
  className,
  leftIcon,
  rightIcon,
  children,
  onClick,
}) => {
  return (
    <ButtonContainer
      variant={variant}
      size={size}
      className={className}
      type={type}
      onClick={onClick}
    >
      {leftIcon}
      <span>{children}</span>
      {rightIcon}
    </ButtonContainer>
  );
};

export default Button;
