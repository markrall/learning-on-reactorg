import React from 'react';

import styled from "styled-components";

const TextInputStyles = styled.input`
  color: var(--indigo-dye);
  border: none;
  border-radius: 3px;
  border-bottom: 3px solid transparent;
  font-family: inherit;
  font-size: inherit;
  outline: none;
  padding: 0.5rem;
  margin: 0.25rem 0 .5rem 0;
  width: 100%;

  &:focus:invalid {
    border-bottom: 3px solid orangered;
    outline: none;
  }

  &:focus:valid {
    border-bottom: 3px solid green;
  }
`;

const TextInput = (props) => {
  return (
    <TextInputStyles
      id={props.id}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      required={props.required}
    />
  );
}

export default TextInput;