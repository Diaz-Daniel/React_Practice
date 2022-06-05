const reactContentRoot = document.getElementById("root");

// const myFirstElement = React.createElement("ul", null, [
//   React.createElement("li", null, "item 1"),
//   React.createElement("li", null, "item 2"),
// ]);

const myJSXElement = (
  <ul>
    <li>item1</li>
    <li>item2</li>
  </ul>
);
ReactDOM.render(myJSXElement, reactContentRoot);
