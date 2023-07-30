import React, { useEffect, useRef } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='main-heading'>Wright's Movie Madness</h1>
      <div className="search-nav">

      </div>
      <div>
        <form>
          <input type="text" placeholder='Enter A Movie'/>
          <button>Search</button>
        </form>
      </div>
    </div>
  );
}

export default App;
