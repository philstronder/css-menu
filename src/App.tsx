import React from 'react';
import './App.css'

function App() {
  return (
    <div className="Menu">
      <ul className="menu-level-1">
        <li>
          Auto
          <ul className="menu-level-2">
            <li>Cars
              <ul className="menu-level-3">
                <li>Vehicles</li>
                <li>Parts</li>
                <li>Accessories</li>
              </ul>
            </li>
            <li>Motorcycles</li>
            <li>Trucks</li>
          </ul>
        </li>
        <li>
            Gadgets
            <ul className="menu-level-2">
              <li>Phones</li>
              <li>Computers</li>
            </ul>    
        </li>
        <li>
            Item 3
            <ul className="menu-level-2">
              <li>l2-Item 1</li>
              <li>l2-Item 2</li>
              <li>l2-Item 3</li>
            </ul> 
        </li>
      </ul>
    </div>
  );
}

export default App;
