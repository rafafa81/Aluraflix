import styled from "styled-components";

const DivTextAreaStyle = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    gap: 10px;
    
    textarea {
        height: 112px;
    }
`


const TextArea = ({valor, manejador}) => {
  return (
    <DivTextAreaStyle>
      <label>Descripcion</label>
      <textarea onChange={e=>manejador(e.target.value)} value={valor}></textarea>
    </DivTextAreaStyle>
  )
}

export default TextArea
