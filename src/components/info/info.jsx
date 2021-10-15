import React, { useState } from 'react'
import './info.scss'
import InfoModal from '../modals/modal-info/modal-info'
import ModalBackground from '../modal-background/modal-background'

const Info = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const handleToggleModal = () => {
    setModalOpen(!modalOpen)
  }

  const handleKeyPress = e => {
    console.log(e)
    if (e.key === 'Enter') {
      handleToggleModal()
    }
  }

  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      setModalOpen(false)
    }
  })

  return (
    <>
      <div
        className="help-btn"
        role="button"
        aria-label="Hjälp med sidan"
        onClick={handleToggleModal}
        onKeyPress={handleKeyPress}
        tabIndex={0}
      >
        !
      </div>
      {modalOpen && (
        <ModalBackground onKeyDown={handleToggleModal}>
          <InfoModal toggleModal={handleToggleModal}></InfoModal>
        </ModalBackground>
      )}
    </>
  )
}

export default Info
