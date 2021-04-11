import React from "react";

import "./base-button.scss";
const BaseButton = (props) => {
  return <button className={props.color}>{props.children}</button>;
};

export default BaseButton;
