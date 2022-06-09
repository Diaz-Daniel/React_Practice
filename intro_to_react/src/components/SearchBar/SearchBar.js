import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const [searchValue, setsearchValue] = useState("");

  const handleInputChange = (event) => {
    setsearchValue(event.target.value);
  };
  return (
    <div>
      <input type="text" value={searchValue} onChange={handleInputChange} />
      {searchValue}
    </div>
  );
};

export default SearchBar;
