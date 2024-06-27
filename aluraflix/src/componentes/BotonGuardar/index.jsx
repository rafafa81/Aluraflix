import styled from "styled-components";

export const BotonStyle = styled.button`
    width: 30%;
    height: 45px;
    color: ${ props => props.$activo ? 'var(--azul-letras)':'white'};
    border: ${ props => props.$activo ? '2px solid var(--azul-letras)' : '2px solid white' };
    border-radius: 10px;
    box-shadow: ${ props => props.$activo ? '0 0 5px 3px var(--azul-letras) inset' : '0 0 0 0 white inset'};
    font-family: "SourceSansProBold";
    font-size: 17px;
    background-color: black;
    

`

const BotonGuardar = ({ value, activo=false, manejador }) => {
    
    return (
        <BotonStyle $activo={activo} onClick={manejador}>{value}</BotonStyle>
    )
}

export default BotonGuardar

