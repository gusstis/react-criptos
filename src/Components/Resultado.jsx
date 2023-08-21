//import React from 'react'
import styled from "@emotion/styled";

const Resultado = ({resultado}) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado
  return (
    <h1>
        <p>
            El precio actual es: <span> {PRICE} </span>
            Precio mas alto del día: <span> {HIGHDAY} </span>
            Precio mas bajo del día: <span> {LOWDAY} </span>
            Variación últimas 24 hs.: <span> {CHANGEPCT24HOUR} </span>
            Última actualización: <span> {LASTUPDATE} </span>
        </p>
    </h1>
  )
}

export default Resultado