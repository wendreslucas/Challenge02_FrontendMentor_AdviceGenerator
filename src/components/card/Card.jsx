import React from 'react'
import styled from 'styled-components'
import { conteudoEscuro } from '../ui/Variaveis'
import Content from '../content/Content'

const Cartao = styled.div`
  align-items: center;
  background-color: ${conteudoEscuro};
  border-radius: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  flex-direction: column;
  height: 60vh;
  justify-content: space-between;
  padding: 1rem;
  width: 44rem;

  @media (max-width: 425px) {
    width: 92%;
  }

  .Paragrafo {
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
