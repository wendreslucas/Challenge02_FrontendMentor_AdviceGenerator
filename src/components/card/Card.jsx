import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { conteudoEscuro } from '../ui/Variaveis'
import api from '../../pages/api/api.js'

const Cartao = styled.div`
  align-items: center;
  background-color: ${conteudoEscuro};
  border-radius: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  flex-direction: column;
  height: 70vh;
  justify-content: center;
  padding: 1rem;
  width: 44rem;

  .Paragrafo {
    color: red;
    font-size: 32px;
  }
`

const Card = () => {
  const [conselho, setConselho] = useState('')

  async function carregaConselho() {
    const conselho = await api.listaConselho()
    setConselho(conselho)
  }

  useEffect(() => {
    carregaConselho()
  }, [])

  if (!conselho) {
    return <p>Carregando...</p>
  }
  console.log(conselho)
  return (
    <Cartao>
      <h1>{conselho.slip.id}</h1>
      <h3>{conselho.slip.advice}</h3>
    </Cartao>
  )
}

export default Card
