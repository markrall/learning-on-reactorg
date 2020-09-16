import React from 'react';

import TextInput from './TextInput';

import styled from 'styled-components';

const FormStyles = styled.form`
  width: 100%;
`;

const SubmitInput = styled.input`
  background-color: var(--indigo-dye);
  border: 1px solid var(--columbia-blue);
  border-radius: 3px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.55);
  color: var(--columbia-blue);
  font-weight: bold;
  padding: 0.5rem 1rem;
  transition: all 0.2s;

  &:active {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.55);
    filter: brightness(1.2);
  }
`;

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleFieldChange(event) {
    this.setState({ value: event.target.value });
  }
  
  handleFormSubmit(event) {
    alert(`A name was submitted: ${this.state.value}`);
    event.preventDefault();
  }

  render() {
    return (
      <FormStyles onSubmit={this.handleFormSubmit}>
        <label for="nameField">
          Name:
          <TextInput
            id="nameField"
            type="text"
            value={this.state.value}
            onChange={this.handleFieldChange}
            placeholder="Enter a name"
            required={true}
          />
        </label>
        <SubmitInput type="submit" value="Submit" />
      </FormStyles>
    );
  }
}

export default Form;