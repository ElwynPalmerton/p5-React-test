import React, { useState } from 'react';
import './App.css';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch'



function App() {

  const [paused, setPause] = useState(false)

  function handleClick() {
    setPause(!paused);
  }

  return (
    <div className="App">
      <P5Wrapper
        paused={paused}
        rotation={50}
        sketch={sketch}

      />
      <button
        onClick={handleClick}
      >PAUSE/PLAY

      </button>

    </div>
  );
}

export default App;
