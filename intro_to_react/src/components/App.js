import React from "react";
import CountButton from "./CountButton/CountButton";
import SearchBar from "./SearchBar/SearchBar";
import { useEffect, useState } from "react";

const App = () => {
  const [productsState, setProductsState] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((productsArray) => {
        const newProductsState = productsArray.map((product) => {
          return product.title;
        });
        setProductsState(newProductsState);
      });
  }, []);

  const hasProducts = productsState.length > 0;

  return (
    <div>
      <CountButton incrementBy={3} buttonColor={"blue"} />
      {/* <CountButton incrementBy={1} buttonColor={"blue"} />
      <CountButton incrementBy={5} buttonColor={"green"} /> */}
      {hasProducts ? <SearchBar products={productsState} /> : "loading..."}
    </div>
  );
};

export default App;
