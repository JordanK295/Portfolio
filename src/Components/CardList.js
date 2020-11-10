import React from 'react'
import Card from "./Card"
import "./CardList.css"

export default function CardList() {

    return (
        <div className="projects-container-wrapper" id="projects-container-wrapper">
            <div className="card-list-container" id="projects">
                <h1 className="project-title" id="project-title">PROJECTS<div className="bar"></div></h1>
                <div className="card-row-container wrapper">
                    <Card cardImageURL="/Assets/Simpsons_Screenshot.png"
                        cardHeader="The Simpsons Time Trial"
                        cardLanguages="HTML / CSS / JAVASCRIPT"
                        modalImageURL="/Images/nice_food.png"
                        modalHeader="Simpsons Time Trial"
                        modalDescription="The Simpsons Time Trial is a memory game against the clock with a Simpsons theme. It features fast-paced gameplay, sounds, animations and a ranked scoring system for great replayability."
                        modalProjectLink="https://www.youtube.com/"
                        modalGitHubLink=""
                    />
                    <Card cardImageURL="/Assets/to-do-thumbnail.png"
                        cardHeader="To Do List"
                        cardLanguages="REACT"
                        modalImageURL="/Assets/to-do.png"
                        modalHeader="To Do List"
                        modalDescription="The To Do List is a simple application used for listing tasks, marking their completion and filtering between them. This was my first react application, and a great foundation for components, states and props."
                        modalProjectLink=""
                        modalGitHubLink=""
                    />
                    <Card cardImageURL="/Assets/ISS-Tracker-thumbnail.png"
                        cardHeader="ISS Tracker"
                        cardLanguages="HTML / CSS / JAVASCRIPT"
                        modalImageURL="/Assets/to-do.png"
                        modalHeader="International Space Station Tracker"
                        modalDescription="The ISS Tracker is a live map showing the position of the ISS over the Earth. The application updates every second through an API connection, while the space station travels 27000 km/h over the Earth."
                        modalProjectLink=""
                        modalGitHubLink=""
                    />
                    <Card cardImageURL="/Assets/item-1.jpeg"
                        cardHeader="Restaurant Menu"
                        cardLanguages="HTML / CSS / JAVASCRIPT"
                        modalImageURL="/Assets/Menu.png"
                        modalHeader="Restaurant Menu"
                        modalDescription="The Restaurant Menu is a very simple menu with limitless possibilities. The the product information is stored within a class of key-value pairs, then used in dynamic Javascript."
                        modalProjectLink=""
                        modalGitHubLink=""
                        />
                    <Card cardImageURL="/Assets/Morse-Code-Translator-thumbnail.png"
                        cardHeader="Morse Code Translator"
                        cardLanguages="HTML / CSS / JAVASCRIPT"
                        modalImageURL="/Assets/Morse-Code-Translator.png"
                        modalHeader="Morse Code Translator"
                        modalDescription=""
                        modalProjectLink=""
                        modalGitHubLink=""
                    />
                </div>
            </div>
        </div>
    )
}
