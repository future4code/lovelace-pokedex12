
import { useState } from 'react';
import {Switch,Route,BrowserRouter} from 'react-router-dom'

import DetailPokemons from '../componentes/DetailPokemons.js';
import Home from "../componentes/Home";
import Pokedeks from '../componentes/Pokedeks.js';



 const Rotas= () =>{
const[pokedex,setPokedex]= useState([])


const addPokedex = (poke) =>{
  const novoPokemon= {...poke}
  const novoArray=[...pokedex,novoPokemon]
  setPokedex(novoArray)
}
console.log(pokedex)
   return(
    <BrowserRouter>
     <Switch>

       <Route exact path="/">
        <Home addPokedex={addPokedex} />
       </Route>

       <Route exact path="/Pokedeks">
        <Pokedeks pokedex={pokedex} />
       </Route>
      
       <Route exact path="/DetailPokemons/:nome">
         <DetailPokemons/>
       </Route>
  
      <Route>
        <p>Pagina não encontrada ;(</p>
      </Route>
     </Switch>
    </BrowserRouter>
   )
}
export default Rotas;