import React from 'react'
import DetailPokemons from './componentes/DetailPokemons'
import Home from './componentes/Home'
import Pokedex from './componentes/Pokedeks'
import styled from 'styled-components'

const Header = styled.div`
background-color: red; 

`



function App () {

  return (

    <div>
      <Home />
      <Pokedex />
      <DetailPokemons/>
    </div>
   
  );
}

export default App;
