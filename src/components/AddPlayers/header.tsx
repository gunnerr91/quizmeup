import * as React from "react";

type HeaderProps = {
  title: string;
};

export const Header: React.FunctionComponent<HeaderProps> = (props) => {
  return <h1>{props.title}</h1>;
};
