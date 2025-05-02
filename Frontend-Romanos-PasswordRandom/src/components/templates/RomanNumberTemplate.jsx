import React from 'react'
import styled from 'styled-components'
import { RomanNumberForm } from '../organismos/forms/RomanNumberForm'

export const RomanNumberTemplate = () => {
  return (
    <Container>
        <RomanNumberForm/>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`