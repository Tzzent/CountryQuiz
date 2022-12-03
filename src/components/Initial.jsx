import React from 'react';


function Initial({ setOption, img }) {

    function gameMode(option) {
        setOption(option);
    }

    return (
        <div className='card'>
            <img className='img-adventure' src={img} />

            <h3>Choose game mode</h3>
            <div className='options'>
                <button onClick={() => gameMode(1)} className='btn-option1'>Capital of the country is...</button>
                <button onClick={() => gameMode(2)} className='btn-option2'>Capital belongs to flag...</button>
            </div>

        </div>


    );
}

export default Initial;

