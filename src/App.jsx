import AllCountriesList from "./components/AllCountriesList";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-gray-100 h-screen grid place-content-center gap-8">
      <Header />
      <AllCountriesList />
    </div>
  );
}

export default App;
