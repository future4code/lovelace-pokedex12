import styled from "styled-components"
import { Details } from "./Details"


export const MainContainer = styled.div`
background-color: blanchedalmond;

`

export const Body = styled.div`
   
   background-color: burlywood;
   display: grid;
   gap: 30px;
   justify-content: center;
   grid-template-columns: 1fr 1fr 1fr;
   
   
`

export const ImgBF = styled.img`
    margin-left: 2vh;
    width: 200px;
    height: 200px    
`

export const Type = styled.div`
    margin: 10px;
    background-color: white;
    width: 250px;
`

export const MainAttacks = styled.div`
margin: 10px;
background-color: yellow;
width: 250px;
height: 400px;
line-height: 4vh;
`

export const Powers = styled.div`
margin: 10px;
background-color: wheat;
width: 250px;
line-height: 5vh;

`

export const DetailsButton = styled.button`
 width: 150px;
 margin: 10px;

`