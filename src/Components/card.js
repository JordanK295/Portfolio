import React, { useState } from 'react'
import "./Card.css"
import Modal from "./Modal"

const Card = (props) => {
    const {
        cardImageURL,
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

  return (
    
      <div>
        <div class="card card-container"><img src={ cardImageURL } />
          <div class="info">
            <h1>{ cardHeader }</h1>
            <p>{ cardLanguages }</p>
            <button onClick={() => setShowModal(true)}>Learn More</button>
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
