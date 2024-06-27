import styled from 'styled-components'

const CampoTextoStyle = styled.div`
    color:white;
    display: flex;
    flex-direction: column;
    gap: 10px;
    input {
        height: 62px;
    }
`

const CampoTexto = ({texto, placeholder, value, manejador}) => {
  return (
    <CampoTextoStyle>
      <label>{texto}</label>
      <input value={value} onChange={e=>manejador(e.target.value)}/>
    </CampoTextoStyle>
  )
}

export default CampoTexto
