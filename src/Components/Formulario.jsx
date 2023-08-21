//import React from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'

const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s;

    &:hover {
      background-color: #7a7efd;
      cursor: pointer;
    }
`

const Formulario = () => {

  const [SelectMonedas] = useSelectMonedas('Elije tu moneda')

  
  return (
    <form>
        <SelectMonedas />

        <InputSubmit
            type="submit"
            value='cotizar'
        />
    </form>
  )
}

export default Formulario