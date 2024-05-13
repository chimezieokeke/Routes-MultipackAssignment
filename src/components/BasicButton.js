import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState([
    { id: 1, name: 'Chimezie Okeke LinkedIn' },
    { id: 2, name: 'Chimezie Okeke Basketball Profile' },
    { id: 3, name: 'Chimezie Okeke Programming Channel' }
  ]);

  const handleItemClick = (item) => {
    console.log('Item clicked in App:', item);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>This is assignment #1</h1>
      </header>
      <div className="item-list-container">
        <ul className="item-list">
          {items.map(item => (
            <li key={item.id} className="item">
              {item.id === 1 ? (
                <a href="https://www.linkedin.com/in/chimezieokeke/" onClick={() => handleItemClick(item)}>
                  {item.name}
                </a>
              ) : item.id === 2 ? (
                <a href="https://morehouseathletics.com/sports/mens-basketball/roster/chimezie-okeke/3579" onClick={() => handleItemClick(item)}>
                  {item.name}
                </a>
              ) : item.id === 3 ? (
                <a href="https://www.youtube.com/channel/UC00Pj166p47amPEOmmje6vQ" onClick={() => handleItemClick(item)}>
                  {item.name}
                </a>
              ) : (
                <a href={`#${item.id}`} onClick={() => handleItemClick(item)}>
                  {item.name}
                </a>          
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
