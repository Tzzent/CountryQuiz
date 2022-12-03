import './App.css';
import undraw_adventure from './images/undraw_adventure_4hum 1.svg';

import Initial from './components/Initial.jsx';
import Capital from './components/Capital.jsx';
import Flag from './components/Flag.jsx';

import { useState } from 'react';
import Results from './components/Results';

function App() {
  const [option, setOption] = useState(0);
  const [finalScore, setFinalScore] = useState();

  const gameOver = (score) => {
    setFinalScore(score);
    setOption(3);
  }

  const tryAgain = () => {
    setOption(0);
  }

  return (
    <div className="App">

      <div className='container'>
        <h1 className='game-title'>COUNTRY QUIZ</h1>
        {
          option == 0
            ? <Initial
              img={undraw_adventure}
              setOption={setOption} />
            : option == 1
              ? <Capital
                gameOver={gameOver}
                img={undraw_adventure} />
              : option == 2
                ? <Flag
                  gameOver={gameOver}
                  img={undraw_adventure} />
                : option == 3
                  ? <Results
                    finalScore={finalScore}
                    tryAgain={tryAgain} />
                  : undefined
        }

      </div>

      <div className='credit'>&#169; created by <a href='https://www.instagram.com/tzzent' target='_blank'>Tzzent</a> - <a href='https://github.com/Tzzent' target='_blank'>GitHub</a></div>
    </div>
  );
}

export default App;
