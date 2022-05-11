import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import CountryContainer from "./components/CountryContainer";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
});

const App = () => (
  <div id="mainPage">
    <br />
    <ApolloProvider client={client}>
      <CountryContainer />
    </ApolloProvider>
  </div>
);
export default App;
