import React from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

export const Button = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon,
}: ButtonProps) => {
  return <button>{label}</button>;
};
