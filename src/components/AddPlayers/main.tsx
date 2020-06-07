import * as React from "react";
import { Header } from "./header";
import { AppContext } from "../../store";
import { PlayerNamesInput } from "./playerNamesInput";

export const AddPlayerMain: React.FunctionComponent = () => {
  const { state } = React.useContext(AppContext);

  return (
    <>
      {state?.players && state?.players?.length < 1 ? (
        <>
          <Header title="Add players" />
          <PlayerNamesInput />
        </>
      ) : null}
    </>
  );
};
