// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="container"> {/* Apply the container class */}
      <h1 className="title">Routing Assignment</h1>
      <ul className="link-list"> {/* Apply the link-list class */}
        <li className="link-item"> {/* Apply the link-item class */}
          <Link to="/basic-form" className="link">Go to Basic Form</Link>
        </li>
        <li className="link-item"> {/* Apply the link-item class */}
          <Link to="/tic-tac-toe" className="link">Go to TicTacToe</Link>
        </li>
        <li className="link-item"> {/* Apply the link-item class */}
          <Link to="/basic-button" className="link">Go to Basic Button</Link>
        </li>
        <li className="link-item"> {/* Apply the link-item class */}
          <Link to="/timers" className="link">Go to Timers</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
