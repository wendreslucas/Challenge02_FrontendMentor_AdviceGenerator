import { createGlobalStyle } from 'styled-components'
import { fundoEscuro, textoDetalhe } from './ui/Variaveis'

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

    h1 {
    font-size: 11px;
    color: ${textoDetalhe};
    letter-spacing: 3.45px;
    @media screen and (min-width: 600px) {
        font-size: 13px;
    }  
}
`
