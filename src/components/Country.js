import React from 'react';
import { string, number } from 'prop-types';
import styled from 'styled-components';

const Tile = styled.div`
  display: grid;
  border-radius: 0.3rem;
  box-shadow: 0 5px 10px -5px #ccc, 0 -1px 10px -5px #eee;
  cursor: pointer;
`;

const TextWrapper = styled.div`
  padding: 0rem 1.5rem 1.5rem;
  h2 {
    font-size: 16px;
  }
  p {
    font-size: 14px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 165px;
`;

function Country(props) {
  const { name, population, region, capital, flag } = props;

  return (
    <Tile>
      <Image src={flag} alt={name} />
      <TextWrapper>
        <h2>{name}</h2>
        <p>
          <strong>Population:</strong> {population.toLocaleString()}
        </p>
        <p>
          <strong>Region:</strong> {region}
        </p>
        <p>
          <strong>Capital:</strong> {capital}
        </p>
      </TextWrapper>
    </Tile>
  );
}

Country.propTypes = {
  name: string.isRequired,
  population: number.isRequired,
  region: string.isRequired,
  capital: string.isRequired,
  flag: string.isRequired,
};

export default Country;
