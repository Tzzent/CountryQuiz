import React from 'react';
import undraw_winners from '../images/undraw_winners_ao2o 2.svg';
import '../stylesheets/Results.css';

function Results({ tryAgain, finalScore }) {
    return (
        <div className='card card-results'>

            <img className='img-winners' src={undraw_winners} />

            <div className='about-results'>
                <h3>Results</h3>
                <p>You got <span>{finalScore}</span> correct answers</p>
            </div>

            <button onClick={() => tryAgain()}>Try again</button>

        </div>
    );
}

export default Results;