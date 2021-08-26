import styled from "styled-components"
import useRequestData from "../hooks/useRequestData"
import {useParams} from "react-router-dom"

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

function CardPokemon(props) {

  const detalhesPokemon= useRequestData(`https://pokeapi.co/api/v2/pokemon/${props.poke.name}`,{})

  return(
<CardPokemons key={props.poke.name}>
        <p>{props.poke.name}</p>
        <ContainerImg>
            <img src={detalhesPokemon.sprites && detalhesPokemon.sprites.front_default} alt="é um pokemon"/>
        </ContainerImg>

    <ContainerButtons>
        <Button>Adicionar a Pokdeks</Button>
        <Button onClick={props.irParaDetalhesDoPokemon}>Ver detalhes</Button>
    </ContainerButtons>

    </CardPokemons>
  )
}
export default CardPokemon