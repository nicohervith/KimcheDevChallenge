import React from "react";

const CardCountry = (props) => {
  return (
    <div>
      {props.country.length === 0 ? (
        <div className="container-text-card">
          <h4 className="text-container">
            Search something...
            <br />
            <br />
            <br />
          </h4>
        </div>
      ) : (
        <div className="card-container">
          {props.country.map((country) => (
            <div className="" key={country.code}>
              <div className="card-container-box">
                {props.continent === true ? (
                  <h2>
                    {country.continent.name}
                    <hr />
                  </h2>
                ) : (
                  <h2>
                    {country.languages.map((lang) => (
                      <p key={lang.name}>{lang.name}</p>
                    ))}
                  </h2>
                )}
                <div>
                  <h3>
                    {country.emoji} {country.name}
                  </h3>
                  <h4>{country.native}</h4>
                  {props.continent === true ? (
                    <ul>
                      <span>Languages:</span>
                      {country.languages.map((len) => (
                        <li key={len.name}>{len.name}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>
                      Continent:
                      <span>{country.continent.name}</span>
                    </p>
                  )}
                  <p>
                    Capital: <span>{country.capital}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CardCountry;
