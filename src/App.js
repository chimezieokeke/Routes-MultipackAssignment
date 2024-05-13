// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import BasicForm from './components/BasicForm';
import TicTacToe from './components/TicTacToe';
import BasicButton from './components/BasicButton';
import Timers from './components/Timers';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/basic-form" element={<BasicForm/>} />
          <Route path="/tic-tac-toe" element={<TicTacToe/>} />
          <Route path="/basic-button" element={<BasicButton/>} />
          <Route path="/timers" element={<Timers/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
