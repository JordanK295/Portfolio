import React, { useEffect } from 'react'
import "./Navbar.css"


const Navbar = () => {

  const scrollToHome = () => {
    const introductionPage = document.getElementById("introduction-container")
    introductionPage.scrollIntoView();
  }

  const scrollToProjects = () => {
    const projectPage = document.getElementById("projects-container-wrapper")
    projectPage.scrollIntoView();
  }

  const scrollToAbout = () => {
    const aboutPage = document.getElementById("about")   
    aboutPage.scrollIntoView();
  }

  const handleScroll = () => {
    var navBar = document.getElementById("navbar");
    var projectTitle = document.getElementById("project-title");
    const shouldFix = window.pageYOffset > 1009;
    projectTitle.style.marginTop = shouldFix ? "102px" : "50px";
    navBar.className = shouldFix ? "navbar Nav__black" : "navbar";
  }

  useEffect(() => {
    window.addEventListener("scroll", () => handleScroll());;
  }, [])

  return (
    <div>
        <div className="navbar" id="navbar">
          <div className="links">
            <div style={{ color: '#E94C72' }} onClick={scrollToHome}>HOME</div>
            <div onClick={scrollToProjects}>PROJECTS</div>
            <div onClick={scrollToAbout}>ABOUT</div>
          </div>
        </div>
    </div>
  )
}



export default Navbar
