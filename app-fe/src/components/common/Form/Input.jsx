import React from "react";
import tw from "tailwind-styled-components";

const Input = ({ label, name, ...props }) => {
  return (
    <InputWrapper>
      <Label htmlFor={name}>{label}</Label>
    </InputWrapper>
  );
};

const InputWrapper = tw.div`w-full bg-white`;
const Label = tw.label`text-xs text-red-500`;

export default Input;
