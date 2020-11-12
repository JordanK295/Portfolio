import React from "react"
import "./modal.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'

const Modal = (props) => {
    const {
        modalImageURL,
        modalHeader,
        modalDescription,
        modalProjectLink,
        modalGitHubLink,
        setShowModalFalse
    } = props

    return (
        <div>
            <div className="opaque-background" onClick={setShowModalFalse}></div>
            <div className="modalContainer">
                <div className="image-container">
                    <img className="modalImageURL" src={modalImageURL} alt="" />
                </div>
                    <div className="modalBottom">
                        <div className="modalHeader">{modalHeader}</div>
                        <div className="modalDescription">{modalDescription}</div>
                    <div className="bottom-bar">
                        <div className="flex-wrapper2">
                            <a href={modalProjectLink} target="_blank" rel="noreferrer">
                                <div className="modalProjectLink">                              
                                    <div>VIEW SITE</div>
                                </div>
                            </a>
                            <a href={modalGitHubLink} target="_blank" rel="noreferrer">
                                <div className="github-div"><FontAwesomeIcon icon={ faGithubSquare } size="4x"/></div>
                                <div className="modalGitHubLink"></div>
                            </a>
                        </div>
                        <div className="modal-form">
                            <span onClick={setShowModalFalse} className="close-btn"></span>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default Modal
