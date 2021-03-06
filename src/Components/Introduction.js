import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import "./Introduction.css"

export default function Introduction() {
  // Scroll to for the "View my work" button
  const scrollToProjects = () => {
    const projectPage = document.getElementById("projects")
    projectPage.scrollIntoView();
  }
  
  return (
    <div>
      <div className="introduction-container" id="introduction-container">
      <div className="introduction-text">
        <p>Hello, I'm <span>Jordan Kay</span>.</p>
          <p>I'm a junior developer.</p>
          <div onClick={scrollToProjects} className="div-button">
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