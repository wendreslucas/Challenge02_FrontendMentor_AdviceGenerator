import { createGlobalStyle } from 'styled-components'
import { fundoEscuro, textoDetalhe } from './ui/Variaveis'

export const GlobalStyle = createGlobalStyle`
* {
  font-family: 'Manrope', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-size: 1rem;
  
}
   ${
     '' /* * {      
    display:flex;
    background: ${fundoEscuro} ;
    box-sizing: border-box;   
    font-family: 'Manrope', sans-serif;
    height: 100vh;    
    margin: 0;
    padding: 0;
    text-decoration: none;  
    -webkit-font-smoothing: antialiased;
    width: 100%;   
  }  */
   }

body {  
  -webkit-font-smoothing: antialiased;
  background: ${fundoEscuro} ;
}
   
    

`
