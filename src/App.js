import React from "react";

class App extends React.Component {
  render() {
    const names = ["john", "jane", "mike", "tony"];

    return (
      <ul>
        {names.map((name) => {
          return <li>{name}</li>;
        })}
      </ul>
    );
  }
}

export default App;
