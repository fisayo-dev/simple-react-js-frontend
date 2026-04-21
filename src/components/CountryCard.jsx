import { getCurrencyLabel } from "../utils/countries";

export const CountryCard = ({ country, index }) => {
  return (
    <article
      key={`${country.name.common}-${index}`}
      className="flex items-center px-4 gap-4 rounded-2xl border border-gray-200  p-4 shadow-sm"
    >
      <div className="shrink-0 overflow-hidden rounded-2xl border border-gray-200 bg-white p-2 shadow-sm">
        {country.flags?.svg ? (
          <img
            src={country.flags.svg}
            alt={`${country.name.common} flag`}
            className="h-12 w-18 object-cover"
          />
        ) : (
          <div className="grid h-12 w-18 place-content-center text-3xl">
            {country.flag || "🏳️"}
          </div>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <h2 className="text-lg font-semibold text-gray-900">
          {country.name.common}
        </h2>

        <div className="mt-3 grid gap-2 text-sm text-gray-600">
          <p className="rounded-xl px-3 py-2">
            <span className="font-medium text-gray-800">Capital:</span>{" "}
            {country.capital?.[0] || "Not available"}
          </p>
          <p className="rounded-xl px-3 py-2">
            <span className="font-medium text-gray-800">Currency:</span>{" "}
            {getCurrencyLabel(country.currencies)}
          </p>
        </div>
      </div>
    </article>
  );
};
