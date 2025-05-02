import React from 'react'
import styled from 'styled-components'
import { GenerateRandomPasswordForm } from '../organismos/forms/GenerateRandomPasswordForm'

export const GenerateRandomPasswordTemplate = () => {
  return (
    <Container>
      <GenerateRandomPasswordForm/>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`