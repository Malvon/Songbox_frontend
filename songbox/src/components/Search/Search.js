import React, { useState } from "react";

function Search({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Pesquise por um filme..."
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
