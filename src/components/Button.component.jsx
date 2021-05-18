import React from 'react';
import styled from 'styled-components';

const redLight = '#FF2B44';
const blueLight = '#1CFFE5';

const StyledButton = styled.button`
  text-transform: uppercase;
  padding: 25px 30px;
  background-color: var(--color-red-light);
  color: var(--color-blue-light);
  border: none;
  font-size: 2rem;
  box-shadow: 2px 2px 2px var(--color-blue-light);
  cursor: pointer;
  transition: all 0.1s;

  &:active {
    transform: translate(2px, 2px);
    box-shadow: 0px 0px 0 var(--color-blue-light),
      0px 0px 70px var(--color-blue-light);
    color: var(--color-blue-light);
  }
`;

const Button = ({ label, dataKey }) => {
  console.log(dataKey);
  return <StyledButton data-key={dataKey}>{label}</StyledButton>;
};

export default Button;
