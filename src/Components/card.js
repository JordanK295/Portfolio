import React, { useState } from 'react'
import "./Card.css"
import Modal from "./Modal"
import $ from "jquery"

const Card = (props) => {
    const {
        cardImageURL,
        cardImageAlt,
        cardHeader,
        cardLanguages,
        modalImageURL,
        modalHeader,
        modalDescription,
        modalProjectLink,
        modalGitHubLink
  } = props
  
  const [showModal, setShowModal] = useState(false)
  
  const setShowModalFalse = () => setShowModal(false)

  const modalEntranceAnimation = () => {
    setShowModal(true);
    $("modalContainer").addClass("scale-in-center")
  }

  return (
    
      <div className="card-modal-wrapper">
        <div className="card card-container"><img src={ cardImageURL } alt={ cardImageAlt }/>
          <div className="info">
            <h1>{ cardHeader }</h1>
            <p>{ cardLanguages }</p>
            <button onClick={() => modalEntranceAnimation()}>Learn More</button>
          </div>
        </div>

      {showModal ? <Modal 
        modalImageURL={ modalImageURL }
        modalHeader={ modalHeader }
        modalDescription={ modalDescription }
        modalProjectLink={ modalProjectLink }
        modalGitHubLink={ modalGitHubLink }
        setShowModalFalse={ setShowModalFalse }
      /> : null}
    </div>
  )
}

export default Card
