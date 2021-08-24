import React from "react"
import pokeback from "./img/pokeback.png"
import pokefront from "./img/pokefront.png"
import { MainAttacks, Body , Powers , MainContainer , DetailsButton} from "./Styled"
import { ImgBF } from "./Styled"
import { Type } from "./Styled"




export const Details = () => {
    return (
        <MainContainer>
            <header><h1>Details</h1></header>

            <Body>
                <div>
                    <h2>--imagem de frente</h2>
                    <ImgBF src={pokefront} />
                    <h2>--imagem de costas</h2>
                    <ImgBF src={pokeback} />
                </div>

                <Powers>
                    <h2>Poderes</h2>
                    <br/>
                    <h4>Hp : 58</h4>
                    <h4>attack: 64</h4>
                    <h4>devense</h4>
                    <h4>special-attack:80</h4>
                    <h4>special-defense:65</h4>
                    <h4>speed: 80</h4>
                </Powers>

                <div>

                    <Type>
                        <h2>Tipo</h2>
                        <p>fogo</p>
                    </Type>
                    <br />
                    <MainAttacks>
                        <h2>Principais Ataques</h2>
                        <br/>
                        <h4>razor-wind</h4>
                        <h4>swords-dance</h4>
                        <h4>cut</h4>
                        <h4>bind</h4>
                        <h4>vine-whip</h4>
                    </MainAttacks>


                </div>



              

            </Body>
            <footer>  
                    
                    <DetailsButton>Voltar</DetailsButton>
                    <DetailsButton>Ir para pokedex</DetailsButton>
                

            </footer>

        </MainContainer>
    )

}