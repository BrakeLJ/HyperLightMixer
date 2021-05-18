import React from 'react';
import styled from 'styled-components';

import Button from './components/Button.component';
import ButtonDisplay from './components/ButtonDisplay.component';

const StyledHeading = styled.h1`
  color: ${props => (props.primary ? '#bada55' : 'cadetblue')};
  position: relative;
`;

const App = () => {
  return (
    <div>
      <StyledHeading>HyperLightMixer</StyledHeading>
      <ButtonDisplay />
    </div>
  );
};

export default App;
