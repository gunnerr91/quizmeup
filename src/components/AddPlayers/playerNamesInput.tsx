import * as React from "react";
import { AppContext } from "../../store";
import { player } from "../../Reducer";

type PlayerNamesInputProps = {};
export const PlayerNamesInput: React.FunctionComponent<PlayerNamesInputProps> = (
  props
) => {
  const { state, dispatch } = React.useContext(AppContext);
  const [playerNamesInput, setPlayerNamesInput] = React.useState("");

  const addPlayerNames = (names: string): void => {
    let namesInList = names.split("," || " ");
    let players: player[] = [];
    namesInList.forEach((name) => {
      players.push({ name, score: 0 });
      console.log(name);
    });
    dispatch({ type: "ADD_PLAYERS", payload: players });
  };

  return (
    <>
      <textarea
        onChange={(event) => {
          setPlayerNamesInput(event.target.value);
        }}
      />
      <button onClick={() => addPlayerNames(playerNamesInput)}>Add</button>
    </>
  );
};
