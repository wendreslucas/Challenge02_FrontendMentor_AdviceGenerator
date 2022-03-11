import React from 'react'
import styled from 'styled-components'
import { conteudoEscuro } from '../ui/Variaveis'

import Content from '../content/Content'
import Button from '../divBtn/DivBtn'

const Cartao = styled.div`
  align-items: center;
  background-color: ${conteudoEscuro};
  border-radius: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  flex-direction: column;
  height: 70vh;
  justify-content: space-around;
  padding: 1rem;
  width: 44rem;

  .Paragrafo {
    color: red;
    font-size: 32px;
  }
`

const Card = () => {
  return (
    <Cartao>
      <Content />
    </Cartao>
  )
}

export default Card
