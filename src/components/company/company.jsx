import React from 'react'

import './company.scss'

const Company = ({ data }) => {
  return (
    <li className="company-item">
      <details>
        <summary>
          <h3 className="summary-title">{data.namn}</h3>
          <section className="summary-utbildningar">
            {data.utbildningar.map((utbildning, index) => (
              <p key={index}>{utbildning}</p>
            ))}
          </section>
        </summary>
        <div className="details-container">
          {data.beskrivning !== '' ? (
            <section className="description flex-wrapper">
              <p>
                <strong>Beskrivning:</strong> {data.beskrivning}
              </p>
            </section>
          ) : null}

          {data.ort && (
            <section className="ort flex-wrapper">
              <p>
                <strong>Ort:</strong> {data.ort}
              </p>
            </section>
          )}

          {data.hemsida && (
            <section className="website flex-wrapper">
              <p>
                <strong>Hemsida:</strong>
                <a href={data.hemsida} rel="noreferrer" target="_blank">
                  {data.hemsida}
                </a>
              </p>
            </section>
          )}

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
            {data.kontaktEpost !== '' ? (
              <section className="epost flex-wrapper">
                <strong>Kontakta via e-post: </strong>
                <a href={`mailto:${data.kontaktEpost}`}>{data.kontaktEpost}</a>
              </section>
            ) : null}

            {data.kontaktWebbsida !== '' ? (
              <section className="contact-website flex-wrapper">
                <strong>Kontakta via webbsida: </strong>
                <a href={data.kontaktWebbsida} rel="noreferrer" target="_blank">
                  {data.kontaktWebbsida}
                </a>
              </section>
            ) : null}
          </section>
        </div>
      </details>
    </li>
  )
}

export default Company
