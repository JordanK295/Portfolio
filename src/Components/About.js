import React from 'react'
import "./About.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubSquare, faHtml5, faCss3Alt, faJsSquare, faSass, faReact, faBootstrap, faYarn } from '@fortawesome/free-brands-svg-icons'

export default function About() {
  return (
    <div className="about">
      <h1>ABOUT ME<div className="bar"></div></h1>
      <h2>I'm a junior software developer, based in Manchester, with a passion for solving problems with efficient code.</h2>
      <div className="flexxer">
        <div className="bio">
          <h3>BIO</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aut deserunt blanditiis reiciendis vero, repellat sunt cumque ab aliquam fugiat, voluptatibus consequuntur quo illo ipsa quisquam harum veritatis ducimus eos?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aut deserunt blanditiis reiciendis vero, repellat sunt cumque ab aliquam fugiat, voluptatibus consequuntur quo illo ipsa quisquam harum veritatis ducimus eos?</p>
        </div>
        <div className="tech-stack">
          <h3>TECH STACK</h3>
        <div className="icons-container">
          <div><FontAwesomeIcon icon={faHtml5} size="8x" /></div>
          <div><FontAwesomeIcon icon={ faCss3Alt } size="8x"/></div>
          <div><FontAwesomeIcon icon={ faJsSquare } size="8x"/></div>
          <div><FontAwesomeIcon icon={ faSass } size="8x"/></div>
          <div><FontAwesomeIcon icon={ faReact } size="8x" /></div>
          <div><FontAwesomeIcon icon={faBootstrap} size="8x" /></div>
          <div><FontAwesomeIcon icon={faGithubSquare} size="8x" /></div>
          <div><FontAwesomeIcon icon={faYarn} size="8x" /></div>
          </div>
          </div>
        </div>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      
    </div>
  )
}
