import React, { useState } from "react";
import "./SearchBar.css";

const products = [
  "tooth paste",
  "tooth brush",
  "mouthwash",
  "dental floss",
  "mouth guard",
];

const SearchBar = () => {
  const [searchValue, setsearchValue] = useState("");

  const handleInputChange = (event) => {
    setsearchValue(event.target.value);
  };

  const handleClearClick = () => {
    setsearchValue("");
  };

  const shouldDisplayButton = searchValue.length > 0;

  return (
    <div>
      <input type="text" value={searchValue} onChange={handleInputChange} />
      {shouldDisplayButton && <button onClick={handleClearClick}>clear</button>}

      {products.map(() => {
        return <li>{product}</li>;
      })}
    </div>
  );
};

export default SearchBar;
