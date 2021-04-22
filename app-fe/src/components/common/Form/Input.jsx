import React from "react";
import tw from "tailwind-styled-components";
import { ErrorMessage, Field, useField } from "formik";

const TextInput = ({ label = "", ...props }) => {
  const [field] = useField(props);
  return (
    <InputWrapper>
      <Info>
        <Label htmlFor={props.name}>{label}</Label>
        <ErrorMessage name={props.name} component={Error} />
      </Info>
      <Input {...field} {...props} />
    </InputWrapper>
  );
};

const InputWrapper = tw.div`flex flex-wrap flex-col w-full`;
const Info = tw.div`flex justify-between my-2`;
const Label = tw.label`text-white`;
const Error = tw.span`text-sm text-red-600 text-right mx-2`;
const Input = tw(
  Field
)`border-2 border-red-500 rounded px-4 py-1 outline-none placeholder-red-900
  bg-gray-100
`;

export default TextInput;
