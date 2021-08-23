import React from "react"


import Imgdetails from "./img/imagem.png"



export const Details = () => {
    return (

        <div> 

           <h1>Details</h1> 
            <br/>
            <br/>
            <button>Ir para pokedex</button>
            <img src={Imgdetails}/>

            <button>Voltar</button>
        </div>
    )

}