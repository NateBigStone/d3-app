import React from 'react';
import './App.css';
import Chart from './components/chart/chart.js'
import Map from './components/map/map.js'

function App() {
  return (
    <div className="App">
        <Map width={800} height={600} />
    </div>
  );
}

export default App;
