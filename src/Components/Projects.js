import React from 'react'
import Card from "./Card"
import "./CardList.css"

export default function Projects() {

    return (
        <div className="projects-container-wrapper" id="projects-container-wrapper">
            <div className="card-list-container" id="projects">
                <h1 className="project-title" id="project-title">PROJECTS<div className="bar"></div></h1>
                <div className="card-row-container wrapper">
                    <Card cardImageURL="/Assets/simpsons-time-trial-thumbnail-01.png"
                        cardImageAlt="Simpsons Time Trial thumbnail."
                        cardHeader="The Simpsons Time Trial"
                        cardLanguages="HTML / CSS / JAVASCRIPT"
                        modalImageURL="/Assets/simpsons-time-trial.png"
                        modalHeader="Simpsons Time Trial"
                        modalDescription="The Simpsons Time Trial is a memory game against the clock with a Simpsons theme. It features fast-paced gameplay, sounds, animations and a ranked scoring system for great replayability."
                        modalProjectLink="https://simpsonstimetrial.jordankay.me/"
                        modalGitHubLink="https://github.com/JordanK295/Simpsons-Time-Trial"
                    />
                    <Card cardImageURL="/Assets/to-do-thumbnail.png"
                        cardImageAlt="To-Do List thumbnail."
                        cardHeader="To-Do List"
                        cardLanguages="REACT"
                        modalImageURL="/Assets/to-do.png"
                        modalHeader="To-Do List"
                        modalDescription="The To-Do List is a simple application used for listing tasks, marking their completion and filtering between them. This was my first react application, and a great foundation for components, states and props."
                        modalProjectLink="https://todolist.jordankay.me/"
                        modalGitHubLink="https://github.com/JordanK295/To-Do-List"
                    />
                    <Card cardImageURL="/Assets/ISS-Tracker-thumbnail.png"
                        cardImageAlt="International Space Station Tracker thumbnail."
                        cardHeader="ISS Tracker"
                        cardLanguages="HTML / CSS / JAVASCRIPT"
                        modalImageURL="/Assets/ISS-Tracker.png"
                        modalHeader="International Space Station Tracker"
                        modalDescription="The ISS Tracker is a live map showing the position of the ISS over the Earth. The application updates every second through an API connection, while the space station travels 27000 km/h over the Earth."
                        modalProjectLink="http://isstracker.jordankay.me/"
                        modalGitHubLink="https://github.com/JordanK295/ISS-Tracker"
                    />
                    <Card cardImageURL="/Assets/Morse-Code-Translator-thumbnail-2.png"
                        cardImageAlt="Morse Code Translator thumbnail."
                        cardHeader="Morse Code Translator"
                        cardLanguages="HTML / CSS / JAVASCRIPT"
                        modalImageURL="/Assets/Morse-Code-Translator.png"
                        modalHeader="Morse Code Translator"
                        modalDescription="The Morse Code Translator takes any text and coverts it into morse code, updating instantly. It is built in vanilla Javascript and works by converting the string to an array and mapping over each item."
                        modalProjectLink="http://morsecodetranslator.jordankay.me/"
                        modalGitHubLink="https://github.com/JordanK295/Morse-Code-Translator"
                    />
                    <Card cardImageURL="/Assets/item-1.jpeg"
                        cardImageAlt="Restaurant Menu thumbnail."
                        cardHeader="Restaurant Menu"
                        cardLanguages="HTML / CSS / JAVASCRIPT"
                        modalImageURL="/Assets/Menu.png"
                        modalHeader="Restaurant Menu"
                        modalDescription="The Restaurant Menu is a very simple menu with limitless possibilities. The the product information is stored within a class of key-value pairs, then used in dynamic Javascript."
                        modalProjectLink="http://restaurantmenu.jordankay.me/"
                        modalGitHubLink="https://github.com/JordanK295/Restaurant-Menu"
                        />
                </div>
            </div>
        </div>
    )
}
