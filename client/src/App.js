import './App.css';
import Nav from './containers/Nav.jsx';
import Cards from './containers/Cards.jsx';
import InfoCard from './components/InfoCard';
import Home from './containers/Home.jsx'
import Form from './containers/Form'

import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import { agregarState } from './store/actions'
function App(props) {

  React.useEffect(() => {
    const traerPerros = async () => {
      const res = await fetch('http://localhost:3001/dogs')
      const dogss = await res.json();
      props.agregarState(dogss);
    }
    traerPerros();
  }, [props])
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/infocard/:id" element={<InfoCard />} />
        <Route path="/registro" element={<Form/>}/>
      </Routes>

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    listaPerros: state
  }
}
export default connect(mapStateToProps, { agregarState })(App);
