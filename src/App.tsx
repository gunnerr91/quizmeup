import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { AddPlayerMain } from "./components/AddPlayers/main";
import { PlayerNames } from "./components/AddPlayers/playerNames";
import Store, { AppContext } from "./store";

function App() {
  return (
    <div className="App">
      <Store>
        <AddPlayerMain />
        <PlayerNames />
      </Store>
    </div>
  );
}

export default App;
