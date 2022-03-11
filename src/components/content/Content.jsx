import React, { useState, useEffect } from 'react'
import api from '../../pages/api/api.js'
import Divisor from '../divisor/Divisor.jsx'
import styled from 'styled-components'
import { textoHeader, textoFundoEscuro } from '../ui/Variaveis'
import { BsFillDice5Fill } from 'react-icons/bs'

const Head = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  letter-spacing: 0.2rem;
  color: ${textoHeader};
`

const Btn = styled.button``

const Texto = styled.p`
  font-size: 28px;
  font-weight: 800;
  color: ${textoFundoEscuro};
  padding: 2rem;
  text-align: center;
`
const ContainerBotao = styled.div`
  height: 64px;
  width: 64px;
  border-radius: 50%;
  position: absolute;
  bottom: 60px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${textoHeader};
  margin: auto;
  transition: all 0.3s ease-out;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 20px 0 ${textoHeader};
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
  // console.log(conselho)

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