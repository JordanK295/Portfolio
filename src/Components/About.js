import React from 'react'
import "./About.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubSquare, faHtml5, faCss3Alt, faJsSquare, faSass, faReact, faBootstrap, faYarn } from '@fortawesome/free-brands-svg-icons'
import {  faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons"

export default function About() {
  return (
    <div className="about" id="about">
      <h1>ABOUT ME<div className="bar"></div></h1>
      <h2 className="one-liner">I'm a junior developer with a passion for solving problems with efficient solutions.</h2>
      <div className="flexxer">
        <div className="bio">
          <h2>BIO<div className="bar"></div></h2>
          <div className="bio-text">
            <p>I'm from Manchester and studied Business and Economics at the University of Salford. My professional experience is in digital marketing through generating online sales in a variety of industries.</p>
            <div className="my-cv">
              <a href="/Assets/Jordan_Kay-Junior_Software_Developer_CV.pdf" target="_blank" rel="noreferrer"><div><FontAwesomeIcon icon={faFilePdf} size="1x" />View CV</div></a>
            </div>
            <p>My developer skills are self-taught, alongside guidance from friends in the web development community. The driving force behind my personal development has been my love of learning new skills (which developing is never short of), and the creative elements in building a project.</p>
          </div>
          <a href="mailto:jordankay295@gmail.com"><div className="div-button">
            <div className="envelope-icon">
              <FontAwesomeIcon icon={faEnvelope} size="1x" />
            </div>
            <p>Let's work together</p>
          </div></a>
        </div>
        <div className="tech-stack">
          <h2>TECH STACK<div className="bar"></div></h2>
        <div className="icons-container">
          <div><FontAwesomeIcon icon={faHtml5} size="7x" /></div>
          <div><FontAwesomeIcon icon={ faCss3Alt } size="7x"/></div>
          <div><FontAwesomeIcon icon={ faJsSquare } size="7x"/></div>
          <div><FontAwesomeIcon icon={ faSass } size="7x"/></div>
          <div><FontAwesomeIcon icon={ faReact } size="7x" /></div>
          <div><FontAwesomeIcon icon={faBootstrap} size="7x" /></div>
          <div><FontAwesomeIcon icon={faGithubSquare} size="7x" /></div>
          <div><FontAwesomeIcon icon={faYarn} size="7x" /></div>
          </div>
          </div>
        </div>  
    </div>
  )
}
