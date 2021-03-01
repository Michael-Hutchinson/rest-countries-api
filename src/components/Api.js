import React, { useEffect, useState } from 'react';

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
    <ul>
      {countries.map((country) => (
        <li key={country.alpha3Code}>{country.name}</li>
      ))}
    </ul>
  );
}

export default Api;
