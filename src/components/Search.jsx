const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <>
      <div className="search">
        {/* <img src="../../public/search.png" alt="search png" /> */}
        <input
          type="text"
          placeholder="Search through thousands of Movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </>
  );
};

export default Search;
