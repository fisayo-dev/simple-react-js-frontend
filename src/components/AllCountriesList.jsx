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
    <main>
      <div className="grid container mx-auto px-4 py-2">
        <div className="bg-white p-4 rounded-3xl shadow-sm w-full sm:max-w-4xl max-h-100 overflow-y-auto">
          {loading ? (
            <div className="py-50 text-center text-gray-500">Loading...</div>
          ) : error ? (
            <div className="py-10 text-center text-red-600">
              Error: {error.message}
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 p-4">
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
