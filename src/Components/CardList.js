import React from 'react'
import Card from "./Card"
import "./CardList.css"

export default function CardList() {

    return (
        <div className="card-list-container">
            <h1>PROJECTS</h1>
            <div className="card-row-container wrapper">
                <Card cardImageURL=""
                    cardHeader="HELLO TESTING!"
                    cardLanguages=""
                    modalImageURL=""
                    modalHeader=""
                    modalDescription=""
                    modalProjectLink=""
                    modalGitHubLink=""
                />
                <Card cardImageURL="/Assets/Simpsons_Screenshot.png"
                    cardHeader="HELLO TESTING!dsa assa"
                    cardLanguages="HTML / CSS / JAVASCRIPT"
                    modalImageURL="/Images/nice_food.png"
                    modalHeader="MODAL HIHI"
                    modalDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
                    modalProjectLink="https://www.youtube.com/"
                    modalGitHubLink=""
                />
                <Card cardImageURL=""
                    cardHeader="HELLO TESTING!"
                    cardLanguages=""
                    modalImageURL=""
                    modalHeader=""
                    modalDescription=""
                    modalProjectLink=""
                    modalGitHubLink=""
                />
                </div>
                <div className="card-row-container wrapper">
                <Card cardImageURL=""
                    cardHeader="HELLO TESTING!"
                    cardLanguages=""
                    modalImageURL=""
                    modalHeader=""
                    modalDescription=""
                    modalProjectLink=""
                    modalGitHubLink=""
                    />
                    <Card cardImageURL=""
                    cardHeader="HELLO TESTING!"
                    cardLanguages=""
                    modalImageURL=""
                    modalHeader=""
                    modalDescription=""
                    modalProjectLink=""
                    modalGitHubLink=""
                />
                <Card cardImageURL=""
                    cardHeader="HELLO TESTING!"
                    cardLanguages=""
                    modalImageURL=""
                    modalHeader=""
                    modalDescription=""
                    modalProjectLink=""
                    modalGitHubLink=""
                    />
            </div>
        </div>
    )
}
