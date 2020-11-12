import React, { useEffect } from 'react'
import "./Navbar.css"

const Navbar = () => {
  // Scroll to for each section
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

  // Creating the sticky navbar effect and filling the gap with margin when it swaps position to fixed

  const handleScroll = (sticky) => {
    var navBar = document.getElementById("navbar");
    var projectTitle = document.getElementById("project-title");
    const shouldFix = window.pageYOffset > sticky;
    projectTitle.style.marginTop = shouldFix ? "102px" : "50px";
    navBar.className = shouldFix ? "navbar Nav__black" : "navbar";
  }

  useEffect(() => {
    var navBar = document.getElementById("navbar");
    var sticky = navBar.offsetTop;
    window.addEventListener("scroll", () => handleScroll(sticky));
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
