
import React from 'react';
import NavBar from '../src/componentes/navbar';
import ItemListContainer from '../src/componentes/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer mensaj="¡Bienvenido a nuestra tienda!" />
    </div>
  );
}

export default App;
