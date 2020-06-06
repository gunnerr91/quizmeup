import * as React from "react";
import { Header } from "./header";
import { AppContext } from "../../store";

export const AddPlayerMain: React.FunctionComponent = () => {
  const { state, dispatch } = React.useContext(AppContext);

  if (state?.players && state?.players?.length > 0) {
    console.log("players found");
  } else {
    console.log("no players yet");
  }
  return (
    <>
      <Header title="Add players" />
      {state?.players?.map((player) => (
        <h2>{player.name}</h2>
      ))}
    </>
  );
};
