import React, { useEffect, useState } from "react";

function ItemDetail({ match }) {
  useEffect(() => {
    fetchApi();
  }, []);

  const [country, setCountry] = useState({
    currencies: {
      0: {},
    },
    languages: {
      0: {},
    },
  });

  const fetchApi = async () => {
    const fetchApi = await fetch(
      `https://restcountries.eu/rest/v2/name/${match.params.name}?fullText=true`
    );

    const countryData = await fetchApi.json();
    console.log(countryData);
    setCountry(countryData[0]);
  };
  return (
    <div className="container">
      <div className="details">
        <img src={country.flag} />
        <h2>Country Name : {country.name}</h2>
        <h2>Native Name : {country.nativeName}</h2>
        <h2>Capital City : {country.capital}</h2>
        <h2>Region : {country.region}</h2>
        <h2>Currencies : {country.currencies[0].name}</h2>
        <h2>Languages : {country.languages[0].name}</h2>
      </div>
    </div>
  );
}

export default ItemDetail;
