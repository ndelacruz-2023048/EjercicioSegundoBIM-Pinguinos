import React from 'react'
import { NavLink } from 'react-router'
import styled from 'styled-components'

export const HomeTemplate = () => {
  return (
    <Container>
        <section className='sectionbuttons'>
            <h1>Exercise Programs</h1>
            <div className='buttons'>
                <NavLink to="/roman-number">
                    <button className='button_1'>Translate Romans to Decimal</button>
                </NavLink>
                <NavLink to="/generate-random-password">
                    <button className='button_1'>Generate random password</button>
                </NavLink>
            </div>
        </section>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    .sectionbuttons{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        height: 80%;
        width: 60%;
        backdrop-filter: blur(20px);
        .buttons{
            display: flex;
            flex-direction: column;
            gap: 10px;
            .button_1{
                background-color: white;
                padding: 10px 25px;
                border-radius: 20px;
                border: 2px solid #33ccc4;
                &:hover{
                    background-color: #33ccc4;
                    border-color: #e6e6e6;
                }
            }
        }
    }
`
