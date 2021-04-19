import React from "react";

import BaseButton from "../../base-button/base-button";

import "./modal-delete.scss";

const DeleteModal = () => {
  return (
    <div className="delete-modal">
      <h3>Är du säker du vill radera NAMN helt från företagspoolen?</h3>
      <section className="buttons">
        <BaseButton color="danger">JA</BaseButton>
        <BaseButton color="base">NEJ</BaseButton>
      </section>
    </div>
  );
};

export default DeleteModal;
