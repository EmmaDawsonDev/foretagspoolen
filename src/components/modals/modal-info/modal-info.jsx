import React from 'react'

import './modal-info.scss'

const InfoModal = ({ toggleModal }) => {
  return (
    <div className="info-modal">
      <div className="flex-row">
        <p>Frågor om företag?</p>
        <a href="mailto:lotta.armijo.holmberg@iths.se">Kontakta Lotta Armijo Holmberg</a>
      </div>
      <div className="flex-row">
        <p>Frågor/problem med webbsidan?</p>
        <a href="mailto:foretagspoolenITHS@gmail.com">Kontakta webmaster</a>
      </div>
      <button onClick={toggleModal}>CLOSE</button>
    </div>
  )
}

export default InfoModal
