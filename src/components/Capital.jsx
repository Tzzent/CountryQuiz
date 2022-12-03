import React, { useEffect, useState } from 'react';
import { newQuestion } from 'country-quiz'; //Api
import Options from './Options.jsx';

function Capital({ gameOver, img }) {
    const [question, setQuestion] = useState();

    useEffect(() => {
        getQuestion();
    }, [])

    const getQuestion = () => {
        const question = newQuestion('country-to-capital', 4);
        setQuestion(question);
    }

    return (
        <div className='card'>
            <img className='img-adventure' src={img} />

            <h3>What is the capital of {question == undefined ? 'Loading...' : question.question}?</h3>
            <div className='options'>
                {question == undefined ? 'Loading...' : <Options getQuestion={getQuestion} gameOver={gameOver} answer={question.answer} options={question.options.sort()} />}
            </div>

        </div>
    );
}

export default Capital;