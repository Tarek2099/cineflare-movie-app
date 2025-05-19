import useFetchHook from "../hooks/FetchHook";

const Search = () => {
  const { searchTerm, handleSearch } = useFetchHook();
  console.log(searchTerm);

  return (
    <>
      <div className="search">
        {/* <img src="../../public/search.png" alt="search png" /> */}
        <input
          type="text"
          placeholder="Search through thousands of Movies"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
    </>
  );
};

export default Search;
