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
          <a href="/Assets/Jordan_Kay-Junior_Software_Developer_CV.pdf" target="_blank" rel="noreferrer"><div><FontAwesomeIcon icon={faFilePdf} size="2x" /></div></a>
          <a href="https://github.com/JordanK295" target="_blank" rel="noreferrer"><div><FontAwesomeIcon icon={faGithub} size="2x" /></div></a>
          <a href="mailto:jordankay295@gmail.com" target="_blank" rel="noreferrer"><div><FontAwesomeIcon icon={faEnvelope} size="2x" /></div></a>
        </div>
          <p className="copyright">JORDAN KAY<span> © 2020</span></p>
      </div>
    </div>
  )
}
