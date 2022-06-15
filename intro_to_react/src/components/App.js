import React from "react";
import CountButton from "./CountButton/CountButton";
import SearchBar from "./SearchBar/SearchBar";
import { useEffect, useState } from "react";

const App = () => {
  const [productsState, setProductsState] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setProductsState([
        "tooth paste",
        "tooth brush",
        "mouthwash",
        "dental floss",
        "mouth guard",
      ]);
    }, 2000);
  }, []);

  return (
    <div>
      <CountButton incrementBy={3} buttonColor={"blue"} />
      {/* <CountButton incrementBy={1} buttonColor={"blue"} />
      <CountButton incrementBy={5} buttonColor={"green"} /> */}

      <SearchBar products={productsState} />
    </div>
  );
};

export default App;
