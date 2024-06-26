import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


export const BotonStyle = styled.button`
    width: 50%;
    height: 45px;
    color: ${ props => props.$activo ? 'var(--azul-letras)':'white'};
    border: ${ props => props.$activo ? '2px solid var(--azul-letras)' : '2px solid white' };
    border-radius: 10px;
    box-shadow: ${ props => props.$activo ? '0 0 5px 3px var(--azul-letras) inset' : '0 0 0 0 white inset'};
    font-family: "SourceSansProBold";
    font-size: 17px;
    

`

export const BotonHeader = ({ value, activo=false, enlace }) => {
    let navigate = useNavigate()  
    function navegar(){
          navigate(enlace)
    }    
    return (
        
            <BotonStyle $activo={activo} onClick={navegar}>{value}</BotonStyle>
        
    )
}