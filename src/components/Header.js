import React from 'react';
import styled from 'styled-components';

const Heading = styled.header`
  background-color: var(--white);
  box-shadow: var(--darkGrey) 0 -2px 5px;
  h1 {
    margin: 0;
    padding: 10px;
  }
`;

function Header() {
  return (
    <Heading>
      <h1>Where in the world?</h1>
    </Heading>
  );
}

export default Header;
