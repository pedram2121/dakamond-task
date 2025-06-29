"use client";
import React from "react";
import styles from "./Input.module.scss";

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
}

function Input({ value, onChange, placeholder, type = "text" }: InputProps) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={styles.input}
    />
  );
}

export default Input;
