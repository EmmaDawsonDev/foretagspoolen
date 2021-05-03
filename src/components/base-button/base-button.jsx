import React from "react";

import "./base-button.scss";
const BaseButton = (props) => {
  console.log(props.data);
  return (
    <button
      className={props.color}
      onClick={(e) => props.toggleModal(e, props.data)}
      data={props.data}
    >
      {props.children}
    </button>
  );
};

export default BaseButton;
