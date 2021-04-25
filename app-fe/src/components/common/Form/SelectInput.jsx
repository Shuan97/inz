import { ErrorMessage, Field, useField } from "formik";
import React from "react";
import tw from "tailwind-styled-components";

const SelectInput = ({
  label = "",
  list = [
    { label: "Test1", value: 1 },
    { label: "Test2", value: 2 },
    { label: "Test3", value: 3 },
  ],
  ...props
}) => {
  const [field] = useField(props);

  // list={[
  //   { label: "123", value: 1 },
  //   { label: "test", value: 2 },
  //   { label: "test", value: 423 },
  //   { label: "test", value: 12 },
  // ]}
  return (
    <InputWrapper>
      <Info>
        <Label htmlFor={props.name}>{label}</Label>
        <ErrorMessage name={props.name} component={Error} />
      </Info>
      <Input as='select' {...field} {...props}>
        <option defaultValue>-- select the option --</option>
        {list &&
          list.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
      </Input>
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

export default SelectInput;
