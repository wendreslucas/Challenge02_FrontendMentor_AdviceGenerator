import React from 'react'
import styled from 'styled-components'
import { textoDetalhe, textoFundoEscuro } from '../ui/Variaveis'

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`

const TextoRodape = styled.a`
  font-weight: 800;
  text-decoration: none;
  color: ${textoFundoEscuro};
  font-size: 12px;

  &:hover {
    color: ${textoDetalhe};
  }
`

const Rodape = () => {
  return (
    <Footer>
      <TextoRodape
        target="_blank"
        href="https://www.linkedin.com/in/wendres-lucas/"
        rel="linkedin"
      >
        Coded By Wendres Lucas
      </TextoRodape>
    </Footer>
  )
}

export default Rodape
