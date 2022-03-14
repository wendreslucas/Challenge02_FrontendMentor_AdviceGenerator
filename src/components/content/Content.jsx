import React, { useState, useEffect } from 'react'
import api from '../../pages/api/api.js'
import Divisor from '../divisor/Divisor.jsx'
import styled from 'styled-components'
import { textoDetalhe, textoFundoEscuro } from '../ui/Variaveis'
import { BsFillDice5Fill } from 'react-icons/bs'

const Head = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  letter-spacing: 0.2rem;
  color: ${textoDetalhe};
`

const Texto = styled.p`
  font-size: 24px;
  font-weight: 800;
  color: ${textoFundoEscuro};
  margin: 24px 24px;

  @media (min-width: 375px) {
    font-size: 20px;
  }
`
const ContainerBotao = styled.div`
  height: 64px;
  width: 64px;
  border-radius: 50%;
  position: absolute;

  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${textoDetalhe};
  margin: auto;
  transition: all 0.3s ease-out;

  @media (min-width: 1440px) {
    flex-direction: column;
    bottom: 150px;
    position: absolute;
  }

  @media (min-width: 1024px) {
    flex-direction: column;
    bottom: 110px;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    bottom: 90px;
  }

  @media (max-width: 425px) {
    flex-direction: column;
    bottom: 90px;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 20px 0 ${textoDetalhe};
  }
`
const Content = () => {
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

  return (
    <>
      <Head> ADVICE #{conselho.slip.id}</Head>
      <Texto>
        {'"'}
        {conselho.slip.advice}
        {'"'}
      </Texto>
      <Divisor />
      <ContainerBotao>
        <BsFillDice5Fill onClick={carregaConselho} size={32}></BsFillDice5Fill>
      </ContainerBotao>
    </>
  )
}

export default Content
