//import React from 'react'
import styled from "@emotion/styled"

const Label = styled.label`
    color: #fff;
`

const useSelectMonedas = (label, opciones) => {
  // Un hook retorna un objeto o un arreglo

  const SelectMonedas = () => (
    <>
        <Label htmlFor="">{label}</Label>
        <select>
          <option value="">Seleccione...</option>
          {opciones.map( opcion => (
            <option
              key={opcion.id}
              value={opcion.id}
            >{opcion.nombre}</option>
          ))}
        </select>
    </>
  )
    
  
  return [ SelectMonedas ]
}

export default useSelectMonedas