import React from 'react';
import Game from './Game';
import '../css/div.css';

const YappingComponent: React.FC = () => {
    const displayYapping = () => {
        let text = document.getElementById("field");
        if(text!.style.display === "block") text!.style.display = "none";
        else text!.style.display = "block";
    }
    return (
        <button onClick={displayYapping}>
            Description
        </button>
    );
}

const Home: React.FC = () => {
    return (
        <>
            <div className="title">
                <h1>Bio coursework</h1>
                <h2>Made by Alexander Lim, Markus Liaw, Chua Kai Keat, Xu Zihan</h2>
                <YappingComponent />
                <div id="field" style={{ display: 'none' }}>
                    <p>Hello! Welcome to our group's dichotomous key,which I(Alexander) made and deployed</p>
                    <p>I have tried my best to make this website as simple as possible to facilitate use and efficency XD</p>
                    <p>Basically, this website has two key functions.</p>
                    <p>First, you can scroll through the photo gallery below and click on a photo to see the information behind each
                        plant. You can click go back on that page to go back to this index page </p>
                    <p>Second, and possibly most important, is our dichotomous key. You can choose a plant from the gallery and find its
                        information using the dichotomous key. Simply just choose the choice that best describes your plant in each
                        question and you'll be lead to the correct plant in no time!</p>
                    <p>I hope you enjoy this webiste, and appreciate its simplicity!</p>
                </div>
            </div>
            <Game />
        </>
    );
}

export default Home;
