import React from "react";
// import CountButton from "./CountButton/CountButton";
import SearchBar from "./SearchBar/SearchBar";

const products = [
  "tooth paste",
  "tooth brush",
  "mouthwash",
  "dental floss",
  "mouth guard",
];

const App = () => {
  return (
    <div>
      {/* <CountButton incrementBy={1} buttonColor={"blue"} />
      <CountButton incrementBy={5} buttonColor={"green"} /> */}
      <SearchBar products={products} />
    </div>
  );
};

export default App;
