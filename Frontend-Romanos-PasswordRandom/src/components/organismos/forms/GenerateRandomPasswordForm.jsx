import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { useRandomPasswordStore } from '../../../stores/PassworRandomStore'

export const GenerateRandomPasswordForm = () => {
  const {handleSubmit,register,formState:{errors}} = useForm()
  const {fetchPasswordRandom} = useRandomPasswordStore()
  const handleClickSubmit =async (data)=>{
    console.log(data);
    const randomNumber={
      length: parseInt(data?.inputRandomNumberLenght),
      mayus: JSON.parse( data?.inputRandomMayus),
      numbers:JSON.parse(data?.inputRandomNumberFilter),
      simbols:JSON.parse(data?.inputRandomSimbol)
    }
    const response = await fetchPasswordRandom(randomNumber)
    console.log(response);
    alert("Contraseña generada:"+response.password)
  } 

  return (
    <Container onSubmit={handleSubmit(handleClickSubmit)}>
        <h2>Generate Random Password</h2>
        <label htmlFor="" className='titleNumberRoman'>Cantidad de caracteres</label>
        <input className='inputGenerateRandomNumber' type="number" {...register("inputRandomNumberLenght",{required:"Cantidad de caracteres obligatorio"})}/>
        {errors.inputRandomNumberLenght && <span className='spanError'>{errors.inputRandomNumberLenght.message}</span>}
        <label htmlFor="">Con Mayusculas</label>
        <select name="" id="" className='selectPasswordOptions' {...register("inputRandomMayus",{required:"Seleccion de mayusculas obligatorio"})}>
          <option value={true}>Si</option>
          <option value={false}>No</option>
        </select>
        {errors.inputRandomMayus && <span className='spanError'>{errors.inputRandomMayus.message}</span>}
        <label htmlFor="">Con Numeros</label>
        <select name="" id="" className='selectPasswordOptions' {...register("inputRandomNumberFilter",{required:"Seleccion de mayusculas obligatorio"})}>
          <option value={true}>Si</option>
          <option value={false}>No</option>
        </select>
        {errors.inputRandomNumberFilter && <span className='spanError'>{errors.inputRandomNumberFilter.message}</span>}
        <label htmlFor="">Con simbolos</label>
        <select name="" id="" className='selectPasswordOptions' {...register("inputRandomSimbol",{required:"Seleccion de mayusculas obligatorio"})}>
          <option value={true}>Si</option>
          <option value={false}>No</option>
        </select>
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
  .inputGenerateRandomNumber{
    border: 2px solid #33ccc4;
    border-radius: 20px;
    padding: 10px 0;
    width:20%;
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
  .selectPasswordOptions{
    width: 20%;
    border: 2px solid #33ccc4;
    border-radius: 20px;
    text-align: center;
    &:focus{
      outline: none;
      box-shadow: none;
    }
  }
`

