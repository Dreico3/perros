import './App.css';
import Nav from './containers/Nav.jsx';
import Cards from './containers/Cards.jsx';
import Home from './containers/Home.jsx'
import { Route, Routes} from 'react-router-dom';
import React from 'react';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cards" element={<Cards />} />
      </Routes>

    </div>
  );
}

export default App;
