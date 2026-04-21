const Header = () => {
  return (
    <header className="">
      <div className="container mx-auto px-4 py-2 text-center">
        <div className="grid gap-2">
          <h1 className="text-3xl md:text-4xl font-bold">Rest countries</h1>
          <p className="text-sm md:text-base">
            UI implementation of {""}{" "}
            <a
              href="https://restcountries.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 bg-gray-200 rounded font-semibold hover:bg-gray-300"
            >
              restcountries.com
            </a>{" "}
            api.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
