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

  const handleScroll = (sticky, projectsOffset, aboutOffset) => {
      // Creating the sticky navbar effect and filling the gap with margin when it swaps position to fixed
    var navBar = document.getElementById("navbar");
    var projectTitle = document.getElementById("project-title");
    const shouldFix = window.pageYOffset > sticky;
    projectTitle.style.marginTop = shouldFix ? "102px" : "50px";
    navBar.className = shouldFix ? "navbar Nav__fixed" : "navbar";

    // Navbar coloring based on scroll position
    var navbarAbout = document.getElementById("navbar-about");
    var navbarProjects = document.getElementById("navbar-projects");
    var navbarHome = document.getElementById("navbar-home");

    if (window.pageYOffset > aboutOffset) {
      navbarAbout.className = "navbar-about highlighted"
      navbarProjects.className = "navbar-projects un-highlighted"
      navbarHome.className = "navbar-home un-highlighted"
    }
    else if (window.pageYOffset > projectsOffset) {
      navbarAbout.className = "navbar-about un-highlighted"
      navbarProjects.className = "navbar-projects highlighted"
      navbarHome.className = "navbar-home un-highlighted"
    }
    else {
      navbarAbout.className = "navbar-about un-highlighted"
      navbarProjects.className = "navbar-projects un-highlighted"
      navbarHome.className = "navbar-home highlighted"
    }
  }

  useEffect(() => {
    var navBar = document.getElementById("navbar");
    var projects = document.getElementById("projects-container-wrapper");
    var about = document.getElementById("about");
    var sticky = navBar.offsetTop;
    var projectsOffset = projects.offsetTop -300
    var aboutOffset = about.offsetTop - 300
    window.addEventListener("scroll", () => handleScroll(sticky, projectsOffset, aboutOffset));
  }, [])

  return (
    <div>
        <div className="navbar" id="navbar">
          <div className="links">
            <div onClick={scrollToHome} id="navbar-home">HOME</div>
            <div onClick={scrollToProjects} id="navbar-projects">PROJECTS</div>
            <div onClick={scrollToAbout} id="navbar-about">ABOUT</div>
          </div>
        </div>
    </div>
  )
}

export default Navbar
