import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const submitCountry = (e) => {
    e.preventDefault();
    console.log(input.split(" ")[0].substring(1, 2));
  };

  const inputCountry = (e) => {
    setInput(e.target.value);
  };

  const [name, setProps] = useState([]);

  const [input, setInput] = useState("");

  useEffect(() => {
    fetchApi();
    console.log(input);
  }, []);

  const fetchApi = async () => {
    const fetchApi = await fetch("https://restcountries.eu/rest/v2/all");

    const fetchdata = await fetchApi.json();
    console.log(fetchdata);
    setProps(fetchdata);
  };

  return (
    <div className="container">
      <div className="search-container">
        <input
          placeholder="enter the country name"
          onChange={inputCountry}
          type="text"
          value={input}
        />
      </div>
      <div className="result-container">
        {input === ""
          ? name.map((country) => (
              <div className="result">
                <Link to={`/countries/${country.name.toLowerCase()}`}>
                  <h2>{country.name}</h2>
                </Link>
                <h3>{country.region}</h3>
                <img src={country.flag}></img>
              </div>
            ))
          : name
              .filter((country) => country.name.toLowerCase().match(input.toLowerCase()))
              .map((country) => (
                <div className="result">
                  <Link to={`/countries/${country.name.toLowerCase()}`}>
                    <h2>{country.name}</h2>
                  </Link>
                  <h3>{country.region}</h3>
                  <img src={country.flag}></img>
                </div>
              ))}
      </div>
    </div>
  );
}

export default Home;

/*country.name.toLowerCase().substring(0, input.length) ===
input.toLowerCase()*/
