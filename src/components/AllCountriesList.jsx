import { useEffect } from "react";
import { useState } from "react";
import { fetchCountries } from "../lib/countries";
import { CountryCard } from "./CountryCard";

const AllCountriesList = () => {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCountries()
      .then((data) => {
        setCountries(data);
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <main className="w-full">
      <div className="ml-auto mr-auto w-full max-w-4xl pt-1 pb-1">
        <div className="w-full max-h-100 overflow-y-auto rounded-3xl bg-white p-3 shadow-sm sm:p-4">
          {loading ? (
            <div className="pt-8 pb-8 text-center text-gray-500">Loading...</div>
          ) : error ? (
            <div className="pt-8 pb-8 text-center text-red-600">
              Error: {error.message}
            </div>
          ) : (
            <div className="grid gap-3 pt-1 pb-1 sm:grid-cols-2">
              {countries.map((country, index) => (
                <CountryCard key={`${country.name.common}-${index}`} country={country} index={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default AllCountriesList;
