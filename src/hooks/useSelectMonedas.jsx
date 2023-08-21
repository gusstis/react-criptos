//import React from 'react'
import styled from "@emotion/styled"

const Label = styled.label`
    color: #fff;
`

const useSelectMonedas = (label) => {
  // Un hook retorna un objeto o un arreglo

  const SelectMonedas = () => (
    <>
        <Label htmlFor="">{label}</Label>
    </>
  )
    
  
  return [ SelectMonedas ]
}

export default useSelectMonedas