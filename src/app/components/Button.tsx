import React from "react";
import styles from "./Button.module.scss";

interface IButtonProps {
  title: string;
  onClick: () => void | Promise<void>;
  disabled?: boolean;
}

export default function Button({ onClick, title, disabled }: IButtonProps) {
  return (
    <button
      className={`${styles.btn} ${disabled ? styles.disabled : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
}
