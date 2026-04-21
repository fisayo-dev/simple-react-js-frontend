import { getCurrencyLabel } from "../utils/countries";

export const CountryCard = ({ country, index }) => {
  return (
    <div
      key={`${country.name.common}-${index}`}
      className="flex items-center gap-3 rounded-2xl border border-gray-200 p-3 shadow-sm sm:p-4"
    >
      <div className="shrink-0 overflow-hidden rounded-2xl border border-gray-200 bg-white p-1 shadow-sm">
        {country.flags?.svg ? (
          <img
            src={country.flags.svg}
            alt={`${country.name.common} flag`}
            className="h-12 w-18 object-cover"
          />
        ) : (
          <div className="m-1 grid h-12 w-18 place-content-center text-3xl">
            {country.flag || "🏳️"}
          </div>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <h2 className="text-lg font-semibold text-gray-900">
          {country.name.common}
        </h2>

        <div className="mt-2 grid gap-2 text-sm text-gray-600">
          <p className="rounded-xl pl-2 pr-2 pt-1.5 pb-1.5">
            <span className="font-medium text-gray-800">Capital:</span>{" "}
            {country.capital?.[0] || "Not available"}
          </p>
          <p className="rounded-xl pl-2 pr-2 pt-1.5 pb-1.5">
            <span className="font-medium text-gray-800">Currency:</span>{" "}
            {getCurrencyLabel(country.currencies)}
          </p>
        </div>
      </div>
    </div>
  );
};
