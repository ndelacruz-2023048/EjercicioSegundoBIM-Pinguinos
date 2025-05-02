import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { useRomanNumberStore } from '../../../stores/RomanNumberStore'

export const RomanNumberForm = () => {
  const {handleSubmit,register,formState:{errors}} = useForm()
  const {fetchNumberRoman} = useRomanNumberStore()
  const handleClickSubmit = async(data)=>{
    console.log(data);
    const numberoman={
      numerosRomanos:data.inputRomanNumber
    }
    const translateNumberRoman = await fetchNumberRoman(numberoman)
    console.log(translateNumberRoman);
    alert(`Numero romano ${data.inputRomanNumber}=${translateNumberRoman.number}`)
  } 

  return (
    <Container onSubmit={handleSubmit(handleClickSubmit)}>
        <label htmlFor="" className='titleNumberRoman'>Numero Romano</label>
        <input className='inputNumberRoman' type="text" {...register("inputRomanNumber",{required:"Campo obligatorio"})}/>
        {errors.inputRomanNumber && <span className='spanError'>{errors.inputRomanNumber.message}</span>}
        <button className='submitNumberRoman' type='submit'>Translate to Decimal Number</button>
    </Container>
  )
}

const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 50%;
  width: 50%;
  background-color: aliceblue;
  .titleNumberRoman{
    font-size: 25px;
    font-weight: 600;
  }
  .inputNumberRoman{
    border: 2px solid #33ccc4;
    border-radius: 20px;
    padding: 10px 0;
    width:100%;
    &:focus{
      outline: none;
      box-shadow: none;
    }
  }
  .spanError{
    color: #f52323;
  }
  .submitNumberRoman{
    border-radius: 20px;
    background-color: #25948e;
    border: 1px solid #25948e;
    padding: 10px 15px;
    color: white;
    width:100%;
    &:hover{
      background-color: white;
      border: 1px solid #25948e;
      color: #25948e;
    }
  }
`

