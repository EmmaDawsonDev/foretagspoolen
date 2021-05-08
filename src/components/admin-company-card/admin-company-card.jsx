import React from "react";

import BaseButton from "../base-button/base-button";

import "./admin-company-card.scss";

const AdminCompanyCard = ({ data, toggleModal }) => {
  return (
    <li className="admin-company-item">
      <h3>{data.namn}</h3>
      <div className="company-info-wrapper">
        <section className="courses-accepted">
          <strong>Utbildningar: </strong>
          {data.utbildningar.map((utbildning, index) => (
            <p key={index}>{utbildning}</p>
          ))}
        </section>
        <section className="company-info">
          <p>
            <strong>Beskrivning:</strong>
            {data.beskrivning}
          </p>
          <p>
            <strong>Hemsida: </strong>
            <a href={data.hemsida}> {data.hemsida}</a>
          </p>
          <p>
            <strong>ITHS Matchar: </strong>
            {data.ITHSMatchar ? "Ja" : "Nej"}
          </p>
          <p>
            <strong>Kontakt epost: </strong>
            <a href={`mailto:${data.kontaktEpost}`}> {data.kontaktEpost}</a>
          </p>
          <p>
            <strong>Kontakt webbsida: </strong>
            <a href={data.kontaktWebbsida}> {data.kontaktWebbsida}</a>
          </p>
          <p>
            <strong>Senast kontaktad: </strong>
            {data.senastKontaktad}
          </p>
          <p>
            <strong>Synlig för studerande: </strong>
            {data.synlig ? "Ja" : "Nej"}
          </p>
        </section>
      </div>
      <div className="buttons">
        <BaseButton color="base" toggleModal={toggleModal} data={data}>
          Redigera
        </BaseButton>
        <BaseButton color="grey" toggleModal={toggleModal} data={data}>
          Radera
        </BaseButton>
      </div>
    </li>
  );
};

export default AdminCompanyCard;
