const Header = () => {
  return (
    <header>
      <div className="ml-auto mr-auto w-full max-w-4xl text-center pt-1 pb-1">
        <div className="grid gap-2">
          <h1 className="text-3xl md:text-4xl font-bold">Rest countries</h1>
          <p className="text-sm md:text-base">
            UI implementation of {""}{" "}
            <a
              href="https://restcountries.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded bg-gray-200 pl-2 pr-2 pt-1 pb-1 font-semibold hover:bg-gray-300"
            >
              restcountries.com
            </a>{" "}
            api.
          </p>
          <span className="text-xs">It shows name, flag, currency and capital.</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
