
import {Switch,Route,BrowserRouter} from 'react-router-dom'

import DetailPokemons from '../componentes/DetailPokemons.js';
import Home from "../componentes/Home";
import Pokedeks from '../componentes/Pokedeks.js';



 const Rotas= () =>{


   return(
    <BrowserRouter>
     <Switch>

       <Route exact path="/">
        <Home/>
       </Route>

       <Route exact path="/Pokedeks">
        <Pokedeks/>
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