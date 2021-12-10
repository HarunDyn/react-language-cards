import React from "react";
import Card from "./components/card/Card";
import Data from "./database/Data";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Languages</h1>
      <div className="container">
        {Data.map((card) => (
          <Card key={card.name} {...card} />
        ))}
      </div>
    </div>
  );
}

export default App;
