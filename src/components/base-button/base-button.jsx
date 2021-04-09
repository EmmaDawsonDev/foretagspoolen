import React from "react";

import "./base-button.scss";
const BaseButton = (props) => {
  console.log(props);
  return <button className={props.type}>{props.children}</button>;
};

export default BaseButton;
