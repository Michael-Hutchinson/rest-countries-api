import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 90%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 240px);
  justify-content: center;
  gap: 4rem;
  padding: 2rem 0;
`;

const Tile = styled.div`
  display: grid;
  border-radius: 0.3rem;
  box-shadow: 0 5px 10px -5px #ccc, 0 -1px 10px -5px #eee;
  cursor: pointer;
`;

const TextWrapper = styled.div`
  padding: 1rem 1.5rem 1.5rem;
`;

const Image = styled.img`
  width: 100%;
  height: 165px;
`;

const apiURL = 'https://restcountries.eu/rest/v2';

function Api() {
  const [errors, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [countries, setCountry] = useState([]);

  useEffect(() => {
    fetch(`${apiURL}`)
      .then((response) => response.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCountry(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (errors) {
    return <div>Error loading API</div>;
  }
  if (!isLoaded) {
    return <div>Loading countries...</div>;
  }
  return (
    <Wrapper>
      <Grid>
        {countries.map((country) => (
          <Tile>
            <Image src={country.flag} alt={country.name} />
            <TextWrapper>
              <h2>{country.name}</h2>
              <p>
                <strong>Population:</strong> {country.population}
              </p>
              <p>
                <strong>Region:</strong> {country.region}
              </p>
              <p>
                <strong>Capital:</strong> {country.capital}
              </p>
            </TextWrapper>
          </Tile>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default Api;
