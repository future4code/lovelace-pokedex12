import React from 'react'
import styled from 'styled-components';
import {useHistory} from "react-router-dom"


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
const CardPoderes = styled.div`
border: 1px solid #649BD9; 
box-shadow: 1px 0px 3px 0px #649BD9;
border-radius: 5px;
width: 350px;
height: 400px;
margin: 35px;
`
const CardAtaques = styled.div`
border: 1px solid #649BD9; 
box-shadow: 1px 0px 3px 0px #649BD9;
border-radius: 5px;
width: 350px;
height: 400px;
margin: 35px;
align-items: center;
justify-content: center;
text-align: center;
`

const CardPokemonsImg = styled.div`
border: 1px solid #649BD9; 
box-shadow: 1px 0px 3px 0px #649BD9;
border-radius: 5px;
text-align:center;
width: 350px;
height: 400px;
margin: 35px;
align-items: center;
justify-content: center;
`

const ButtonPokeDex = styled.div`
background-color: #649BD9;
border-bottom: 3px solid #E35C3C;
padding: 3px;
color: white;
margin: 20px;
cursor: pointer;
`
const Text = styled.p`
padding: 10px;
text-align: center;
`
const Titulos = styled.h1`
text-align: center;
color: #E35C3C;
padding: 15px;
`
function DetailPokemons () {
const history = useHistory()


const voltarPaginaAnterior=()=>{
  history.goBack()
}
    return (
  
      <div>
                
        <Header>
            <h1>Pokedex</h1>
            <ButtonPokeDex>Adicionar/Remover da Pokedex</ButtonPokeDex>
            <ButtonPokeDex onClick={voltarPaginaAnterior}>Voltar</ButtonPokeDex>
        </Header>

        <ContainerPrincipal>

            <CardPokemonsImg>
              <Text>Foto frente</Text>
              <Text>Foto costas</Text>
            </CardPokemonsImg>

            <CardPoderes>
              <Titulos>Poderes</Titulos>
              <Text>Hp: </Text>
              <Text>Ataque: </Text>
              <Text>Defesa: </Text>
              <Text>Especial-ataque: </Text>
              <Text>Especial-defesa: </Text>
              <Text>Velocidade: </Text>
            </CardPoderes>

            <CardAtaques>
              <Titulos>Principais habilidades</Titulos>
              <Text>Mega-punch</Text>
              <Text>Fire-Punch</Text>
              <Text>Thunder-punch</Text>
              <Text>Scratch</Text>
              <Text>Swords-dance</Text>
          
              <Titulos>Tipo</Titulos>
                <Text>Grama</Text>
            </CardAtaques>
              
        </ContainerPrincipal>

      </div>
     
    );
}
  
  export default DetailPokemons;