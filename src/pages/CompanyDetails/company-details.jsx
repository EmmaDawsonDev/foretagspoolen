import React from "react";
//import { useParams } from "react-router-dom";

import "./company-details.scss";
import TheHeader from "../../components/the-header/the-header";

const CompanyDetails = ({ companyData, match }) => {
  const data = companyData.find(
    (company) =>
      company.namn.toLowerCase() == match.params.companyname.toLowerCase()
  );
  console.log(data);
  return (
    <React.Fragment>
      <TheHeader title={match.params.companyname} />
      <main>
        {data.beskrivning !== "" ? (
          <section className="description">
            <h4>Beskrivning:</h4>
            <p>{data.beskrivning}</p>
          </section>
        ) : null}

        <section className="courses">
          <h4>Utbildningar:</h4>
          {data.utbildningar.map((utbildning, index) => (
            <p key={index}>{utbildning}</p>
          ))}
        </section>
        <section className="ITHS-matchar">
          <h4>ITHS Matchar:</h4>
          {data.ITHSMatchar === true ? <p>Ja</p> : <p>Nej</p>}
          {data.ITHSMatchar === true ? (
            <section>
              <h4>ITHS Matchar detaljer:</h4>
              <p>{data.ITHSMatcharBeskrivning}</p>
            </section>
          ) : null}
        </section>
      </main>
    </React.Fragment>
  );
};

export default CompanyDetails;
