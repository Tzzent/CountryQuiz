import React, { useEffect, useState } from 'react';
import { newQuiz } from 'country-quiz'; //Api
import Options from './Options.jsx';
import '../stylesheets/Flag.css';

function Flag({ gameOver, img }) {

    const [quiz, setQuiz] = useState();
    const [flag, setFlag] = useState();

    useEffect(() => {
        getQuestion();
    }, [])

    const getQuestion = () => {
        const quiz = newQuiz('flag-to-capital', 1, 4)
        setQuiz(quiz.questions[0]);
        getFlag(quiz.questions[0].answer);
    }

    const getFlag = (name) => {
        fetch(`https://restcountries.com/v2/capital/${name}`)
            .then(res => res.json())
            .then(data => setFlag(data[0].flag))
            .catch(err => alert('😣 Ups! Please refresh the page.\n\n' + err))
    }

    return (
        <div className='card'>

            <img className='img-adventure' src={img} />

            <div className='img-flag'>
                {flag == undefined ? 'Loading...' : <img src={flag} />}
            </div>

            <h3>What is the captial of this flag?</h3>

            <div className='options'>
                {
                    quiz == undefined
                        ? 'Loading...'
                        : <Options
                            getQuestion={getQuestion}
                            gameOver={gameOver}
                            answer={quiz.answer}
                            options={quiz.options.sort()} />
                }
            </div>
        </div>
    );
}

export default Flag;