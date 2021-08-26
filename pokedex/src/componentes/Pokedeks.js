import React from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

const Header = styled.div`
display: flex;
justify-content: space-evenly;
background-color: #649BD9; 
padding: 10px;
color: white;
text-align: center;
margin-bottom: 30px;
align-items: center;
`
const ContainerPrincipal = styled.div `
display: grid;
grid-template-columns: 1fr 1fr 1fr;
`

const CardPokemons = styled.div`
border: 1px solid #649BD9; 
box-shadow: 1px 0px 3px 0px #649BD9;
border-radius: 5px;
width: 350px;
height: 350px;
margin: 35px;
`

const ContainerButtons = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
margin: 20px auto;
cursor: pointer;
`

const ContainerImg = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
width: 200px;
height: 200px;
margin: 20px auto;
` 

const Button = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: #E35C3C;
border-radius: 5px;
border: 1px solid #E35C3C;
padding: 15px;
color: white;
margin: 20px;
width: 150px;
height: 35px;
text-align: center;
box-shadow: 1px 1px 3px 1px #649BD9;
`
const ButtonPokeDex = styled.div`
background-color: #649BD9;
border-bottom: 3px solid #E35C3C;
padding: 3px;
color: white;
margin: 20px;
cursor: pointer;
`


function Pokedex () {
  const history=useHistory()

  const voltarPaginaAnterior=()=>{
    history.goBack()
  }
  const irParaDetalhesDoPokemon=()=>{
    history.push("/DetailPokemons")
}

    return (
  
      <div>
        
        <Header>
          <h1>Pokedex</h1>
          <ButtonPokeDex onClick={voltarPaginaAnterior}>Voltar para lista de Pokemons</ButtonPokeDex>
        </Header>

        <ContainerPrincipal>

            <CardPokemons>

              <ContainerImg>
                <p>Foto</p>
              </ContainerImg>

            <ContainerButtons>
              <Button>Remover</Button>
              <Button onClick={irParaDetalhesDoPokemon}>Ver detalhes</Button>
            </ContainerButtons>

            </CardPokemons>
                    
        </ContainerPrincipal>

      </div>
     
    );
}
  
  export default Pokedex;