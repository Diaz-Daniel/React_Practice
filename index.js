const reactContentRoot = document.getElementById("root");

// const myFirstElement = React.createElement("ul", null, [
//   React.createElement("li", null, "item 1"),
//   React.createElement("li", null, "item 2"),
// ]);

const App = () => {
  const myItem = "item3";

  return (
    <ul>
      <li>item1</li>
      <li>item2</li>
      <li>{myItem}</li>
    </ul>
  );
};

ReactDOM.render(<App />, reactContentRoot);
