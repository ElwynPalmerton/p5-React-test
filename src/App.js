import React, { useState } from 'react';
import './App.css';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch'
import NewSlider from './components/NewSlider';

function App() {
  const [paused, setPause] = useState(false)

  const [color, setColor] = useState(0);

  function handleClick() {
    setPause(!paused);
  }

  function handleSlider(e) {
    console.log('handling slider');
    console.log(e.target.value);
  }

  return (
    <div className="App">

      <div style={{
        position: "absolute"
      }}>
        <P5Wrapper
          paused={paused}
          rotation={50}
          sketch={sketch}
        />
      </div>
      <NewSlider
        slideMove={handleSlider}
      />
      <button
        style={{
          position: "relative"
        }}
        onClick={handleClick}
      >PAUSE/PLAY

      </button>
    </div>
  );
}

export default App;
