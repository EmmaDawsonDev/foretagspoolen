import React from "react";

import "./modal-add.scss";

const ModalAdd = () => {
  return (
    <div className="add-modal">
      <section className="form-section">
        <label htmlFor="företagsnamn">Företagsnamn</label>
        <input type="text" name="företagsnamn" value="" required />
      </section>

      <section className="form-section">
        <label htmlFor="beskrivning">Beskriv företaget</label>
        <textarea name="beskrivning" id="" cols="30" rows="10"></textarea>
      </section>

      <section className="form-section">
        <label htmlFor="hemsida">Hemsida - måste börja med http(s)</label>
        <input type="text" name="hemsida" value="" />
      </section>

      <section className="form-section">
        <label htmlFor="kontaktEpost">Kontakt Epost</label>
        <input type="email" name="kontaktEpost" value="" />
      </section>

      <section className="form-section">
        <label htmlFor="kontaktWebbsida">
          Kontakt Webbsida - måste börja med http(s)
        </label>
        <input type="text" name="kontaktWebbsida" value="" />
      </section>

      <section className="form-section">
        <p>Utbildningar:</p>

        <div>
          <input type="checkbox" id="WU" name="WU" />
          <label htmlFor="WU" className="checkbox-label">
            WU
          </label>
        </div>

        <div>
          <input type="checkbox" id="ITP" name="ITP" />
          <label htmlFor="ITP" className="checkbox-label">
            ITP
          </label>
        </div>

        <div>
          <input type="checkbox" id=".NET" name=".NET" />
          <label htmlFor=".NET" className="checkbox-label">
            .NET
          </label>
        </div>

        <div>
          <input type="checkbox" id="JAVA" name="JAVA" />
          <label htmlFor="JAVA" className="checkbox-label">
            JAVA
          </label>
        </div>

        <div>
          <input type="checkbox" id="FEU" name="FEU" />
          <label htmlFor="FEU" className="checkbox-label">
            FEU
          </label>
        </div>

        <div>
          <input type="checkbox" id="JSU" name="JSU" />
          <label htmlFor="JSU" className="checkbox-label">
            JSU
          </label>
        </div>

        <div>
          <input type="checkbox" id="APP" name="APP" />
          <label htmlFor="APP" className="checkbox-label">
            APP
          </label>
        </div>
      </section>

      <section className="form-section">
        <label htmlFor="ort">Ort</label>
        <input type="text" name="ort" value="" />
      </section>

      <section className="form-section">
        <p>ITHS Matchar:</p>

        <input type="radio" id="ja" name="ITHSMatchar" value="ja" />
        <label htmlFor="ja">ja</label>

        <input type="radio" id="nej" name="ITHSMatchar" value="nej" checked />
        <label htmlFor="nej">nej</label>
      </section>

      <section className="form-section">
        <label htmlFor="ITHSMacharBeskrivning">ITHS Matchar - detaljer</label>
        <textarea
          name="ITHSMatcharBeskrivning"
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </section>

      <section className="form-section">
        <label for="senastKontaktad">Senast kontaktad:</label>

        <input
          type="date"
          id="senastKontaktad"
          name="senastKontaktad"
          value=""
        />
      </section>

      <section className="form-section">
        <p>Synlig för studerande:</p>

        <input type="radio" id="ja" name="synlig" value="ja" />
        <label htmlFor="ja">ja</label>

        <input type="radio" id="nej" name="synlig" value="nej" checked />
        <label htmlFor="nej">nej</label>
      </section>
    </div>
  );
};

export default ModalAdd;
