import React from "react";
//import { useParams } from "react-router-dom";

import "./company-details.scss";
import TheHeader from "../../components/the-header/the-header";

const CompanyDetails = ({ companyData, match }) => {
  const data = companyData.find(
    (company) =>
      company.namn.toLowerCase() === match.params.companyname.toLowerCase()
  );

  return (
    <React.Fragment>
      <TheHeader title={match.params.companyname} />
      {data ? (
        <main className="company-details-wrapper">
          {data.beskrivning !== "" ? (
            <section className="description flex-wrapper">
              <p>
                <strong>Beskrivning:</strong> {data.beskrivning}
              </p>
            </section>
          ) : null}

          <section className="ort flex-wrapper">
            <p>
              <strong>Ort:</strong> {data.ort}
            </p>
          </section>
          <section className="website flex-wrapper">
            <p>
              <strong>Hemsida:</strong>
              <a href={data.hemsida} rel="noreferrer" target="_blank">
                {data.hemsida}
              </a>
            </p>
          </section>

          <section className="courses flex-wrapper">
            <strong>Utbildningar:</strong>
            {data.utbildningar.map((utbildning, index) => (
              <p key={index}>{utbildning}</p>
            ))}
          </section>
          <section className="ITHS-matchar flex-wrapper">
            {data.ITHSMatchar === true ? (
              <p>
                <strong>ITHS Matchar: </strong>Ja
              </p>
            ) : (
              <p>
                <strong>ITHS Matchar: </strong> Nej
              </p>
            )}
          </section>
          {data.ITHSMatchar === true ? (
            <section className="ITHS-matchar-beskrivning flex-wrapper">
              <p>
                <strong>ITHS Matchar detaljer: </strong>
                {data.ITHSMatcharBeskrivning}
              </p>
            </section>
          ) : null}
          <section className="contact ">
            {data.kontaktEpost !== "" ? (
              <section className="epost flex-wrapper">
                <strong>Kontakta via e-post: </strong>
                <a href={`mailto:${data.kontaktEpost}`}>{data.kontaktEpost}</a>
              </section>
            ) : null}

            {data.kontaktWebbsida !== "" ? (
              <section className="contact-website flex-wrapper">
                <strong>Kontakta via webbsida: </strong>
                <a href={data.kontaktWebbsida} rel="noreferrer" target="_blank">
                  {data.kontaktWebbsida}
                </a>
              </section>
            ) : null}
          </section>
        </main>
      ) : (
        <h3 className="loading">Loading...</h3>
      )}
    </React.Fragment>
  );
};

export default CompanyDetails;
