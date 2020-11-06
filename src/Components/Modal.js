import React, { useState } from "react"
import "./modal.css"

const Modal = (props) => {
    const {
        modalImageURL,
        modalHeader,
        modalDescription,
        modalProjectLink,
        modalGitHubLink,
        setShowModalFalse
    } = props

    // const [showModal, setShowModal] = useState(false)

    return (
        <div>
            <div className="opaque-background"></div>
                <div className="modalContainer">
                    <img className="modalImageURL" src={modalImageURL} alt="" />
                    <div className="modalBottom">
                        <div className="modalHeader">{modalHeader}</div>
                        <div className="modalDescription">{modalDescription}</div>
                        <div className="bottom-bar">
                            <div className="modalProjectLink">
                                <a href={modalProjectLink} target="_blank">
                                    <i className="fas fa-external-link-alt"></i>
                                    <div>VIEW SITE</div>
                                </a>
                            </div>
                            <i className="fab fa-github fa-3x"></i>
                            <div className="modalGitHubLink">{modalGitHubLink}</div>
                            <div className="modal-form">
                                <span onClick={setShowModalFalse} className="close-btn"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

{/* <i className="fas fa-external-link-alt"></i>
                        <a href={modalProjectLink}>VIEW</a> */}

            //             <a href="http://www.roambi.com" target="_blank"><div class="button visible">
            //     <i class="mdi mdi-open-in-new"></i>VIEW SITE
            //   </div>

export default Modal
