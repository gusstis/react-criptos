//import React from 'react'
import styled from "@emotion/styled";

const Resultados = styled.div`
    color: #fff;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`

const Imagen = styled.img`
    display: block;
    width: 120px;
`

const Texto = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }
`

const Precio = styled.p`
    font-size: 22px;
    span {
        font-weight: 700;
    }
`

const Resultado = ({resultado}) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado
  return (
    <h1>
        <Resultados>
            <Imagen
                src={`https://cryptocompare.com/${IMAGEURL}`}
                alt="image cripto"
            />
            <div>
            <Precio>El precio actual es: <span> {PRICE} </span></Precio>
            <Texto>Precio mas alto del día: <span> {HIGHDAY} </span></Texto>
            <Texto>Precio mas bajo del día: <span> {LOWDAY} </span></Texto>
            <Texto>Variación últimas 24 hs.: <span> {CHANGEPCT24HOUR} </span></Texto>
            <Texto>Última actualización: <span> {LASTUPDATE} </span></Texto>
            </div>
        </Resultados>
    </h1>
  )
}

export default Resultado