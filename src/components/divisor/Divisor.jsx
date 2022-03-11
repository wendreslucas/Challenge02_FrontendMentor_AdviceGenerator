import React from 'react'
import styled from 'styled-components'
import Divider from '@mui/material/Divider'
import { makeStyles } from '@material-ui/styles'
import { BsPauseFill } from 'react-icons/bs'

const useStyles = makeStyles({
  divisor: {
    width: '100%',
    maxWidth: 290
  }
})

const ContainerDivider = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
const Divisor = () => {
  const classes = useStyles()
  return (
    <>
      <ContainerDivider>
        <Divider className={classes.divisor} /> <BsPauseFill size={42} />
        <Divider className={classes.divisor} />
      </ContainerDivider>
    </>
  )
}

export default Divisor
