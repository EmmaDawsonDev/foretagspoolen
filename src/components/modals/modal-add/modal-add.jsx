import React, { useState } from "react";

import "./modal-add.scss";
import BaseButton from "../../base-button/base-button";

const ModalAdd = ({ currentCompany, toggleModal, type }) => {
  const [namn, setNamn] = useState(currentCompany.namn || "");
  const [beskrivning, setBeskrivning] = useState(
    currentCompany.beskrivning || ""
  );
  const [hemsida, setHemsida] = useState(currentCompany.hemsida || "");
  const [kontaktEpost, setKontaktEpost] = useState(
    currentCompany.kontaktEpost || ""
  );
  const [kontaktWebbsida, setKontaktWebbsida] = useState(
    currentCompany.kontaktWebbsida || ""
  );
  const [utbildningar, setUtbildningar] = useState(
    currentCompany.utbildningar || []
  );
  const [ort, setOrt] = useState(currentCompany.ort || "");
  const [ITHSMatchar, setITHSMatchar] = useState(
    currentCompany.ITHSMatchar || false
  );
  const [ITHSMatcharBeskrivning, setITHSMatcharBeskrivning] = useState(
    currentCompany.ITHSMatcharBeskrivning || ""
  );
  const [senastKontaktad, setSenastKontaktad] = useState(
    currentCompany.senastKontaktad
  );
  const [synlig, setSynlig] = useState(currentCompany.synlig || true);

  const handleName = (e) => {
    setNamn(e.target.value);
  };

  const handleBeskrivning = (e) => {
    setBeskrivning(e.target.value);
  };

  const handleHemsida = (e) => {
    setHemsida(e.target.value);
  };

  const handleKontaktEpost = (e) => {
    setKontaktEpost(e.target.value);
  };

  const handleKontaktWebbsida = (e) => {
    setKontaktWebbsida(e.target.value);
  };

  const handleUtbildningar = (e) => {
    if (!utbildningar.includes(e.target.name)) {
      setUtbildningar([...utbildningar, e.target.name]);
    }
    if (utbildningar.includes(e.target.name)) {
      const newArr = utbildningar.filter(
        (utbildning) => utbildning !== e.target.name
      );
      setUtbildningar(newArr);
    }
  };

  const handleOrt = (e) => {
    setOrt(e.target.value);
  };

  const handleITHSMatchar = (e) => {
    if (e.target.value === "ja") {
      setITHSMatchar(true);
    } else {
      setITHSMatchar(false);
    }
  };

  const handleITHSMatcharBeskrivning = (e) => {
    setITHSMatcharBeskrivning(e.target.value);
  };

  const handleSenastKontaktad = (e) => {
    setSenastKontaktad(e.target.value);
  };

  const handleSynlig = (e) => {
    if (e.target.value === "ja") {
      setSynlig(true);
    } else {
      setSynlig(false);
    }
  };

  const company = {
    namn,
    beskrivning,
    hemsida,
    ITHSMatchar,
    ITHSMatcharBeskrivning,
    kontaktEpost,
    kontaktWebbsida,
    ort,
    senastKontaktad,
    utbildningar,
    synlig,
    timestamp: new Date(),
  };

  return (
    <div className="add-modal">
      <p className="close-modal-button" aria-label="Close">
        &#10006;
      </p>
      <section className="form-section">
        <label htmlFor="företagsnamn">Företagets namn:</label>
        <input
          type="text"
          name="företagsnamn"
          value={namn}
          onChange={handleName}
          required
        />
      </section>

      <section className="form-section">
        <label htmlFor="beskrivning">Beskriv företaget:</label>
        <textarea
          name="beskrivning"
          id=""
          cols="30"
          rows="5"
          value={beskrivning}
          onChange={handleBeskrivning}
        ></textarea>
      </section>

      <section className="form-section">
        <label htmlFor="hemsida">Hemsida - måste börja med http(s):</label>
        <input
          type="text"
          name="hemsida"
          value={hemsida}
          onChange={handleHemsida}
        />
      </section>

      <section className="form-section">
        <label htmlFor="kontaktEpost">Kontakt Epost:</label>
        <input
          type="email"
          name="kontaktEpost"
          value={kontaktEpost}
          onChange={handleKontaktEpost}
        />
      </section>

      <section className="form-section">
        <label htmlFor="kontaktWebbsida">
          Kontakt Webbsida - måste börja med http(s):
        </label>
        <input
          type="text"
          name="kontaktWebbsida"
          value={kontaktWebbsida}
          onChange={handleKontaktWebbsida}
        />
      </section>

      <section className="form-section">
        <p>Utbildningar:</p>

        <div>
          <input
            type="checkbox"
            id="WU"
            name="WU"
            onChange={handleUtbildningar}
            defaultChecked={utbildningar.includes("WU")}
          />
          <label htmlFor="WU" className="checkbox-label">
            WU
          </label>
        </div>

        <div>
          <input
            type="checkbox"
            id="ITP"
            name="ITP"
            onChange={handleUtbildningar}
            defaultChecked={utbildningar.includes("ITP")}
          />
          <label htmlFor="ITP" className="checkbox-label">
            ITP
          </label>
        </div>

        <div>
          <input
            type="checkbox"
            id=".NET"
            name=".NET"
            onChange={handleUtbildningar}
            defaultChecked={utbildningar.includes(".NET")}
          />
          <label htmlFor=".NET" className="checkbox-label">
            .NET
          </label>
        </div>

        <div>
          <input
            type="checkbox"
            id="JAVA"
            name="JAVA"
            onChange={handleUtbildningar}
            defaultChecked={utbildningar.includes("JAVA")}
          />
          <label htmlFor="JAVA" className="checkbox-label">
            JAVA
          </label>
        </div>

        <div>
          <input
            type="checkbox"
            id="FEU"
            name="FEU"
            onChange={handleUtbildningar}
            defaultChecked={utbildningar.includes("FEU")}
          />
          <label htmlFor="FEU" className="checkbox-label">
            FEU
          </label>
        </div>

        <div>
          <input
            type="checkbox"
            id="JSU"
            name="JSU"
            onChange={handleUtbildningar}
            defaultChecked={utbildningar.includes("JSU")}
          />
          <label htmlFor="JSU" className="checkbox-label">
            JSU
          </label>
        </div>

        <div>
          <input
            type="checkbox"
            id="APP"
            name="APP"
            onChange={handleUtbildningar}
            defaultChecked={utbildningar.includes("APP")}
          />
          <label htmlFor="APP" className="checkbox-label">
            APP
          </label>
        </div>

        <div>
          <input
            type="checkbox"
            id="TEST"
            name="TEST"
            onChange={handleUtbildningar}
            defaultChecked={utbildningar.includes("TEST")}
          />
          <label htmlFor="TEST" className="checkbox-label">
            TEST
          </label>
        </div>
      </section>

      <section className="form-section">
        <label htmlFor="ort">Ort:</label>
        <input type="text" name="ort" value={ort} onChange={handleOrt} />
      </section>

      <section className="form-section">
        <p>ITHS Matchar:</p>
        <div className="radio-btns" onChange={handleITHSMatchar}>
          <input
            type="radio"
            id="ja"
            name="ITHSMatchar"
            value="ja"
            defaultChecked={ITHSMatchar}
          />
          <label htmlFor="ja">JA</label>

          <input
            type="radio"
            id="nej"
            name="ITHSMatchar"
            value="nej"
            defaultChecked={!ITHSMatchar}
          />
          <label htmlFor="nej">NEJ</label>
        </div>
      </section>

      <section className="form-section">
        <label htmlFor="ITHSMatcharBeskrivning">ITHS Matchar - detaljer:</label>
        <textarea
          name="ITHSMatcharBeskrivning"
          id=""
          cols="30"
          rows="5"
          value={ITHSMatcharBeskrivning}
          onChange={handleITHSMatcharBeskrivning}
        ></textarea>
      </section>

      <section className="form-section">
        <label htmlFor="senastKontaktad">Senast kontaktad:</label>

        <input
          type="date"
          id="senastKontaktad"
          name="senastKontaktad"
          value={senastKontaktad}
          onChange={handleSenastKontaktad}
          required
        />
      </section>

      <section className="form-section">
        <p>Synlig för studerande:</p>
        <div className="radio-btns" onChange={handleSynlig}>
          <input
            type="radio"
            id="ja"
            name="synlig"
            value="ja"
            defaultChecked={synlig}
          />
          <label htmlFor="ja">JA</label>

          <input
            type="radio"
            id="nej"
            name="synlig"
            value="nej"
            defaultChecked={!synlig}
          />
          <label htmlFor="nej">NEJ</label>
        </div>
      </section>

      {type === "add" ? (
        <section className="buttons">
          <BaseButton color="danger" toggleModal={toggleModal} data={company}>
            LÄGG TILL FÖRETAGET
          </BaseButton>
          <BaseButton color="grey" toggleModal={toggleModal}>
            AVBRYT
          </BaseButton>
        </section>
      ) : null}

      {type === "edit" ? (
        <section className="buttons">
          <BaseButton
            color="danger"
            toggleModal={toggleModal}
            data={{ ...company, id: currentCompany.id }}
          >
            SPARA ÄNDRINGAR
          </BaseButton>
          <BaseButton color="grey" toggleModal={toggleModal}>
            AVBRYT
          </BaseButton>
        </section>
      ) : null}
    </div>
  );
};

export default ModalAdd;
