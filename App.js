const heading = React.createElement("h1", { id: "heading" }, "Hello world");

// creating parent, child and h1
const parent1 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "this is h1 tag")
  )
);

// creating parent, child -> h1 and h2
const parent2 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "this is h1 tag"),
    React.createElement("h2", {}, "this is h2 tag"),
  ])
);

// create parent, child1 -> h1,h2, child 2 -> h1,h2

const parent3 = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "this is h1 tag"),
    React.createElement("h2", {}, "this is h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "this is h1 tag"),
    React.createElement("h2", {}, "this is h2 tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(parent3);
