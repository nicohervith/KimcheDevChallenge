import React from "react";
import { useCountries } from "./countries/HookCountry";
import SearchCountry from "./SearchCountry"


 const CountryContainer = () => {
   const { data, loading } = useCountries();
   return (
     <div className="container-main">
       <br/>
       <h1 className="container-title">Country Search</h1>
       <div className="container-text-title">
           <h2 className="text-container">Search by characters or words</h2>

       </div>
       {loading ? (
         <p>Loading...</p>
       ) : (
         <SearchCountry countries={data?.countries} />
       )}
     </div>
   );
 };

export default CountryContainer;
