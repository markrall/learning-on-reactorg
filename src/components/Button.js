import React from 'react';

import styled from 'styled-components';

const ButtonStyles = styled.button`
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

const Button = (props) => {
    return (
      <ButtonStyles onClick={props.onClick}>{props.children}</ButtonStyles>
    );
}

export default Button;