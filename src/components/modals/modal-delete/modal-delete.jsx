import React from "react";

import BaseButton from "../../base-button/base-button";

import "./modal-delete.scss";

const DeleteModal = ({ currentCompany, toggleModal }) => {
  return (
    <div className="delete-modal">
      <h3>
        Är du säker du vill radera {currentCompany.namn} helt från
        företagspoolen?
      </h3>
      <section className="buttons">
        <BaseButton color="danger" toggleModal={toggleModal}>
          JA
        </BaseButton>
        <BaseButton color="base" toggleModal={toggleModal}>
          NEJ
        </BaseButton>
      </section>
    </div>
  );
};

export default DeleteModal;
