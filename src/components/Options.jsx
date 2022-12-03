import React, { useState } from 'react';
import '../stylesheets/Options.css';
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from 'react-icons/ai';


function Options({ getQuestion, gameOver, answer, options }) {

    const [score, setScore] = useState(0);

    const handleAnswer = (option, id) => {
        const op_selected = document.getElementById(`op-${id}`); //Selected option

        //Correct answer position (op_correct)
        var index_correct;
        options.map((op, index) => {
            if (op == answer) {
                index_correct = index;
            }
        })

        //We get the correct option
        const op_Correct = document.getElementById(`op-${index_correct}`);
        op_Correct.classList.add('correct'); // background-correct: green

        //Correct answer icon
        const check_icon = document.querySelector(`#op-${index_correct} .check`);
        check_icon.classList.add('visible'); // display: block

        //Close icon of the selected option
        const close_icon = document.querySelector(`#op-${id} .close`);

        if (answer == option) { //If the option is correct...
            setScore(score + 1);
            setTimeout(() => getQuestion(), 1500);
        } else { //If the option is wrong...
            setTimeout(() => gameOver(score), 1500);
            op_selected.classList.add('incorrect'); // background-wrong: red
            close_icon.classList.add('visible'); // we show wrong icon
        }

        //We use setTimeout() to remove the style classes
        setTimeout(() => {
            op_Correct.classList.remove('correct'); // bg green removed
            check_icon.classList.remove('visible'); // checkicon removed

            op_selected.classList.remove('incorrect'); // bg red removed
            close_icon.classList.remove('visible'); // wrongicon removed
        }, 1500)
    };

    return (
        <>
            <button onClick={() => handleAnswer(options[0], 0)} id='op-0'> A <p>{options[0]}</p> <div><AiOutlineCloseCircle className='close' /><AiOutlineCheckCircle className='check' /></div> </button>
            <button onClick={() => handleAnswer(options[1], 1)} id='op-1'> B <p>{options[1]}</p> <div><AiOutlineCloseCircle className='close' /><AiOutlineCheckCircle className='check' /></div> </button>
            <button onClick={() => handleAnswer(options[2], 2)} id='op-2'> C <p>{options[2]}</p> <div><AiOutlineCloseCircle className='close' /><AiOutlineCheckCircle className='check' /></div> </button>
            <button onClick={() => handleAnswer(options[3], 3)} id='op-3'> D <p>{options[3]}</p> <div><AiOutlineCloseCircle className='close' /><AiOutlineCheckCircle className='check' /></div> </button>
        </>
    );
}

export default Options;