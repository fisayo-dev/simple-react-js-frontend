export const fetchCountries = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_COUNTRIES_API_URL}?fields=name,capital,flag`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return "Failed to fetch countries: " + error;
  }
};
