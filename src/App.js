// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import BasicForm from './pages/BasicForm';
import TicTacToe from './pages/TicTacToe';
import BasicButton from './pages/BasicButton';
import Timers from './pages/Timers';

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
