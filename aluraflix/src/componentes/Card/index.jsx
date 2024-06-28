import { useContext } from "react";
import styled from "styled-components";
import { VideosContext } from "../VideosContext/VideosContext";
import { EditarContexto } from "../VideosContext/EditarContexto";
import { eliminar } from "../../js/conexionAPI";

const CardStyle = styled.div`
    width: 432px;
    height: 320px;
    /* background-color: ${props => props.$equipoColor}; */
    background-color: black;
    border: 5px solid ${props => props.$equipoColor};
    border-radius: 25px;
    overflow: hidden;
    &>img {
        width: 100%;
        height: 85%;
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;
        
    }
    &>div:nth-child(2) {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 15%;
        border-top: 5px solid ${props => props.$equipoColor};
    }

`

const BotonStyle = styled.div`
    color: white;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    &>img {
        height: 60%;
        width: 25px;
        
    }
`

const Card = ({ colorEquipo , id, imagen}) => {
    const {videos, setVideos} = useContext(VideosContext)
    const {mostrarDialog, setMostrarDialog, infoCard, setInfoCard} = useContext(EditarContexto)
    function eliminarCard(){
        setVideos(videos.filter(video=>video.id!=id))
        eliminar('/videos'+`/${id}`)
    }
    function manejadorMostrarDialog(){
        setInfoCard([...(videos.filter(video=>video.id === id))])
        setMostrarDialog(!mostrarDialog)
    }

    return (
        <CardStyle $equipoColor={colorEquipo}>
            <img src={imagen} alt='' />
            <div>
                <BotonStyle onClick={eliminarCard}>
                    <img src='/img/basura.png' alt="" />
                    <label>BORRAR</label>
                </BotonStyle>
                <BotonStyle onClick={manejadorMostrarDialog}>
                    <img src='/img/lapiz.png' alt="" />
                    <label>EDITAR</label>
                </BotonStyle>
            </div>
        </CardStyle>
    )
}

export default Card
