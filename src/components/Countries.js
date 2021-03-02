import React from 'react';
import { shape } from 'prop-types';
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
          name={country.name}
          population={country.population.toLocaleString()}
          region={country.region}
          capital={country.capital}
          flag={country.flag}
        />
      ))}
    </Grid>
  );
}

Countries.propTypes = {
  countries: shape.isRequired,
};
export default Countries;
