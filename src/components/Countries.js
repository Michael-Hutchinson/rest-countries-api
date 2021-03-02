import React from 'react';
import { arrayOf, shape, string, number } from 'prop-types';
import styled from 'styled-components';
import Country from './Country';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 240px);
  justify-content: center;
  gap: 4rem;
  padding: 2rem 0;
`;

function Countries(props) {
  const { countries } = props;
  return (
    <Grid>
      {countries.map((country) => (
        <Country
          key={country.alpha3Code}
          name={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital}
          flag={country.flag}
        />
      ))}
    </Grid>
  );
}

Countries.propTypes = {
  countries: arrayOf(
    shape({
      name: string,
      population: number,
      region: string,
      capital: string,
      flag: string,
    })
  ).isRequired,
};

export default Countries;
