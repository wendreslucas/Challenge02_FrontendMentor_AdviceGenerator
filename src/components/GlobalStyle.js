import { createGlobalStyle } from 'styled-components'
import { fundoEscuro } from './ui/Variaveis'

export const GlobalStyle = createGlobalStyle`
  body {  
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${fundoEscuro} ;
    -webkit-font-smoothing: antialiased;
    font-family: 'Manrope', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;  
    width: 100%;
    height: 100vh;

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
