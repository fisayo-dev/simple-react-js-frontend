import { useEffect } from "react";
import { useState } from "react";
import { fetchCountries } from "../lib/countries";

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
      <div className="container mx-auto px-4 py-2 text-center">
        <div className="bg-white p-3 rounded-2xl shadow-sm max-h-50 w-full sm:max-w-xl overflow-y-auto">
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>Error: {error.message}</div>
          ) : (
            countries.map((country, index) => (
              <div key={index}>{country.name.common}</div>
            ))
          )}
        </div>
      </div>
    </main>
  );
};

export default AllCountriesList;
