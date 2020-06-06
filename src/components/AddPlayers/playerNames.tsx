import * as React from "react";
import { AppContext } from "../../store";
import { player } from "../../Reducer";

type PlayerNamesProps = {};
export const PlayerNames: React.FunctionComponent<PlayerNamesProps> = (
  props
) => {
  const { state, dispatch } = React.useContext(AppContext);
  const [playerNamesInput, setPlayerNamesInput] = React.useState("");

  const addPlayerNames = (names: string): void => {
    let namesInList = names.split("," || " ");
    let players: player[] = [];
    namesInList.forEach((name) => {
      players.push({ name });
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
