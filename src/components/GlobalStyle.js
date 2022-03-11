import { createGlobalStyle } from 'styled-components'
import { fundoEscuro } from './ui/Variaveis'

export const GlobalStyle = createGlobalStyle`
  body {  
    align-items: center;
    background: ${fundoEscuro} ;
    box-sizing: border-box;
    display: flex;
    font-family: 'Manrope', sans-serif;
    height: 100vh;
    justify-content: center;
    margin: 0;
    padding: 0;
    text-decoration: none;  
    -webkit-font-smoothing: antialiased;
    width: 100%;
    

  ${
    '' /* @media (max-width: 1080px) {
    font-size: 93.75%;
    display: flex;
    align-items: center;
  }
  @media (max-width: 720px) {
    font-size: 87.5%;
  } */
  }
}

`
