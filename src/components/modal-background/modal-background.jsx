import React from "react";

import "./modal-background.scss";

const ModalBackground = (props) => {
  return (
    <div className="modal-background" onClick={props.toggleModal}>
      {props.children}
    </div>
  );
};

export default ModalBackground;
