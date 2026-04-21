import AllCountriesList from "./components/AllCountriesList";
import Header from "./components/Header";

function App() {
  return (
    <div className="grid min-h-screen place-content-center gap-5 bg-gray-100 pl-3 pr-3 pt-5 pb-5 sm:pl-4 sm:pr-4 lg:pl-5 lg:pr-5">
      <Header />
      <AllCountriesList />
    </div>
  );
}

export default App;
