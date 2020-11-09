import React from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons"

export default function Footer() {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="icon-footer-container">
          <div><FontAwesomeIcon icon={faFilePdf} size="8x" /></div>
          <div><FontAwesomeIcon icon={faGithub} size="8x" /></div>
          <div><FontAwesomeIcon icon={faEnvelope} size="8x" /></div>
        </div>
          <p className="copyright">JORDAN KAY<span> © 2020</span></p>
      </div>
    </div>
  )
}
