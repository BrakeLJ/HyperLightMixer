import React from 'react';
import styled from 'styled-components';

import Button from './Button.component';
import buttonArray from '../utils/buttonArray';

const StyledButtonDisplay = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 150px);
  grid-template-rows: repeat(4, 150px);
  gap: 10px;
`;

const ButtonDisplay = () => {
  return (
    <StyledButtonDisplay>
      {buttonArray.map((button, i) => {
        return <Button key={i} dataKey={button.dataKey} label={button.label} />;
      })}
    </StyledButtonDisplay>
  );
};

export default ButtonDisplay;
