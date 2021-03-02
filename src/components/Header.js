import React from 'react';
import styled from 'styled-components';

const Heading = styled.header`
  background-color: var(--white);
  box-shadow: var(--darkGrey) 0 -2px 5px;
  h1 {
    margin: 0;
    padding: 10px 0;
  }
  div {
    max-width: 1440px;
    margin: 0 auto;
    width: 90%;
  }
`;

function Header() {
  return (
    <Heading>
      <div>
        <h1>Where in the world?</h1>
      </div>
    </Heading>
  );
}

export default Header;
