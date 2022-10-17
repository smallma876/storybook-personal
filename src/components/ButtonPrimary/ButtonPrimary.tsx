import React, { ComponentPropsWithRef } from "react";
import { ButtonPrimaryStyles } from "./button-primary.styled";

export interface Props extends ComponentPropsWithRef<"button"> {
  label: string;
}

export const ButtonPrimary = ({ label, ...rest }: Props) => {
  return (
    <ButtonPrimaryStyles.Button {...rest}>{label}</ButtonPrimaryStyles.Button>
  );
};

export default ButtonPrimary;
