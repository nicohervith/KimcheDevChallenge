import React, { useEffect, useState } from "react";
import CardContainer from "./CardContainer";


const SearchCountry = ({ countries }) => {
  
  const [countrySearch, setCountrySearch] = useState([]);
  const [countryInput, setCountryInput] = useState([]);
  const [continent, setContinent] = useState(null);
  const [language, setLanguage] = useState(null);

  useEffect(() => {
    if (continent === null) {
      setContinent(true);
    }
  }, [  ]);


  const handleChange = (e) => {
    setCountryInput(e.target.value);
    filterCountry(e.target.value);
  };

  const filterCountry = (searchInput) => {
    let result = countries.filter((country) => {
      if (
        country.name
          .toString()
          .toLowerCase()
          .startsWith(searchInput.toLowerCase()) &&
        country.name
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase())
      ) {
        return country;
      }
    });
    setCountrySearch(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const showContinent = () => {
    setContinent(true);
    setLanguage(null);
  };

  const showLanguage = () => {
    setLanguage(true);
    setContinent(null);
  };

  return (
    <div>
      <div className="container-input" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            className="input-search"
            placeholder="Search"
            value={countryInput}
            onChange={handleChange}
            autoFocus
          />
        </div>
      </div>

      <div>
        <div className="container-text">
          <h2 className="text-container">Group By: </h2>
          <div className="container-buttons">
            <button
              type="button"
              className="container-button"
              onClick={showContinent}
            >
              Continent
            </button>
          </div>
          <div className="container-buttons">
            <button
              className="container-button"
              type="button"
              onClick={showLanguage}
            >
              Language
            </button>
          </div>
        </div>
      </div>
      <div className="container-card">
        <CardContainer
          country={countrySearch}
          continent={continent}
          language={language}
        />
      </div>
    </div>
  );
};

export default SearchCountry;
