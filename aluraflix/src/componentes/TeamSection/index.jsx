import styled from "styled-components";
import Card from "../Card";
import { useContext } from "react";
import { VideosContext } from "../VideosContext/VideosContext";

const EquipoSection = styled.section`
    background-color: black;
    padding: 40px;
    padding-top: 0;
    &>div:nth-child(1) {
        width: 432px;
        height: 70px;
        background-color: ${props => props.$colorEquipo};
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 15px;
        color: white;
        font-size: 32px;
        font-weight: bolder;
        margin-bottom: 40px;
    }
`
const ContenedorVideos = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 15px;
`

const TeamSection = ({ nombreEquipo, colorEquipo }) => {
    const {videos} = useContext(VideosContext)
    return (
        <EquipoSection $colorEquipo={colorEquipo}>
            <div><label>{nombreEquipo}</label></div>
            <ContenedorVideos>
                {videos.filter(video=>video.categoria === nombreEquipo).map((video=><Card colorEquipo={colorEquipo} id={video.id} key={video.id}/>))}
                {/* <Card colorEquipo={colorEquipo} /> */}
            </ContenedorVideos>
        </EquipoSection>
    )
}

export default TeamSection
