import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Countries from '../components/Countries';

const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 90%;
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
  if (isLoaded) {
    return (
      <Wrapper>
        <Countries countries={countries} />
      </Wrapper>
    );
  }
}

export default Api;
