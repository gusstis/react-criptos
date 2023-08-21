import {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import useSelectMonedas from '../hooks/useSelectMonedas';
import {monedas} from '../data/monedas';

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
    margin-top: 30px;

    &:hover {
      background-color: #7a7efd;
      cursor: pointer;
    }
`

const Formulario = () => {

  const [criptos, setCriptos] = useState([])
  
//..al ser un arreglo, puedo poner cualquier nombre, ya que retorna según el índice
  const [moneda, SelectMonedas] = useSelectMonedas('Elije tu moneda', monedas)

  // useEffect es un buen lugar para mandar llamar una API
  useEffect(() => {
    const consultarAPI = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
      const arrayCriptos = resultado.Data.map( cripto => {

        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName
          }
            return objeto
      } )
      setCriptos(arrayCriptos)
    }
    consultarAPI()
  }, [])
  
  
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