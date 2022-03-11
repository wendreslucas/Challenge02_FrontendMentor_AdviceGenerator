import { createGlobalStyle } from 'styled-components'
import { fundoEscuro } from './ui/Variaveis'

export const GlobalStyle = createGlobalStyle`
  body {      
    background: ${fundoEscuro} ;
    box-sizing: border-box;   
    font-family: 'Manrope', sans-serif;
    height: 100vh;    
    margin: 0;
    padding: 0;
    text-decoration: none;  
    -webkit-font-smoothing: antialiased;
    width: 100%; 
  
}

`
