import React from 'react'
import styled from 'styled-components'
import Card from '../card/Card'

const Contain = styled.div`
  width: 100%;
  height: 96vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Container = () => {
  return (
    <Contain>
      <Card />
    </Contain>
  )
}

export default Container
