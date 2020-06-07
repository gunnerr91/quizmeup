import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { AddPlayerMain } from "./components/AddPlayers/main";
import Store from "./store";
import { Quiz } from "./components/Quiz/main";

function App() {
  return (
    <div className="App">
      <Store>
        <AddPlayerMain />
        <Quiz />
      </Store>
    </div>
  );
}

export default App;
