import './App.css';
import React from 'react';

import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

function App() {
  return (
    <div className="App">
      <div className="Bg"></div>
      <h1>Launching Soon!</h1>
      <div className="timer">
      <FlipClockCountdown
        to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
        className='flip-clock'
        labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
        duration={0.5}
      />
      </div>
      <button className="notif">Notify Me</button>
    </div>
  );
}

export default App;
