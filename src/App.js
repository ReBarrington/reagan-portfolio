import React from 'react';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import './App.css';

function App() {
  return (
    <div className="App">
      <Introduction />
      <Skills />
      <Portfolio />
    </div>
  );
}

export default App;
