import React, { useEffect, useState } from 'react';
import "../css/div.css";

const choiceObject: any = {
    question: "Is the flower yellow?",
    yes: {
        question: "Is the flower trumpet-shaped?",
        yes: {
            answer: "Yellow bells",
            alias: "yb",
        },
        no: {
            answer: "Bay biscayne creeping-oxeye",
            alias: "bbco",
        },
    },
    no: {
        question: "Is the flower trumpet-shaped?",
        yes: {
            question: "Is it purple?",
            yes: {
                answer: "Mexican petunia",
                alias: "mp",
            },
            no: {
                answer: "Oleander",
                alias: "o",
            },
        },
        no: {
            question: "Is it a tree?",
            yes: {
                answer: "Frangipani",
                alias: "f"
            },
            no: {
                question: "Is it shaped tubularly?",
                yes: {
                    answer: "Parakeet",
                    alias: "p"
                },
                no: {
                    question: "Does it have elliptical leaves?",
                    yes: {
                        answer: "Bougainvillea",
                        alias: "b"
                    },
                    no: {
                        question: "Is it white?",
                        yes: {
                            answer: "Jasmine",
                            alias: "j"
                        },
                        no: {
                            answer: "Scarlet Jungleflame",
                            alias: "sj"
                        }
                    }
                }
            }
        }
    },
};

const Game: React.FC = () => {
    const [nowKey, setNowKey] = useState(choiceObject);
    useEffect(() => {
        
        if(nowKey.answer !== undefined){
            // alert(`${nowKey.alias}`);
            location.assign(`#/flower/${nowKey.alias}`)
        }
    }, [nowKey]);
    return (
        <>
            <div className="container">
                <h2 style={{fontSize: 40}}>{nowKey.question}</h2>
            </div>
            <div className="options">
                <button onClick={() => setNowKey(nowKey.yes)}>Yes</button>
                <button onClick={() => setNowKey(nowKey.no)}>No</button>
            </div>
        </>
    );
}

export default Game;