import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import "./Introduction.css"

export default function Introduction() {
  return (
    <div>
      <div className="introduction-container">
      <div className="introduction-text">
        <p>Hello, I'm <span>Jordan Kay</span>.</p>
          <p>I'm a junior software developer.</p>
          <div className="div-button">
            <link to="/"></link>
            <p>View my work</p>
            <div className="icon-container">
              <FontAwesomeIcon icon={faArrowRight} size="lg"/>
            </div>
          </div>
      </div>
        <div className="block-spacer"></div>
      </div>
    </div>
  )
}