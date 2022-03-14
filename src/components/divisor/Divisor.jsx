import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const ImageContainer = styled.div`
  margin-bottom: 30px;
`

const Divisor = () => {
  return (
    <ImageContainer>
      <img src="/pattern-divider-mobile.png" />
    </ImageContainer>
  )
}

export default Divisor
