// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p><Link to="/basic-form">Go to Basic Form</Link></p>
      <p><Link to="/tic-tac-toe">Go to TicTacToe</Link></p>
      <p><Link to="/basic-button">Go to Basic Button</Link></p>
      <p><Link to="/timers">Go to Timers</Link></p>
    </div>
  );
};

export default Home;