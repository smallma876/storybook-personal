import { ComponentPropsWithRef } from "react";
import { ButtonSecondaryStyles } from "./button-secondary.styled";

export interface Props extends ComponentPropsWithRef<"button"> {
  label: string;
}

export const ButtonSecondary = ({ label, ...rest }: Props) => {
  return (
    <ButtonSecondaryStyles.Button {...rest}>
      {label}
    </ButtonSecondaryStyles.Button>
  );
};

export default ButtonSecondary;
