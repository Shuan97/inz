import React, { useState } from "react";
import styled from "styled-components/macro";

const InputField = ({ label, type, value, onChange }) => {
	return (
		<StyledInputField>
			<Label>{label}</Label>
			<Input
				value={value}
				onChange={(e) => onChange(e.target.value)}
				type={type}
			></Input>
		</StyledInputField>
	);
};

export default InputField;

const StyledInputField = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

const Label = styled.h5`
	padding: 0.375rem 0;
	color: #ccc;
`;

const Input = styled.input`
	padding: 0.5rem;
	margin-bottom: 1rem;
	border-radius: 0.375rem;
	font-size: 1rem;
	border: 2px solid ${({ theme }) => theme.backgroundSecondary};
	background: ${({ theme }) => theme.backgroundSecondaryAlt};
	color: ${({ theme }) => theme.textPrimary};
	outline: none;
	transition: border 100ms linear;

	&:focus {
		border-color: gold;
	}
	&:hover {
		border-color: #ffaa32;
	}
`;
