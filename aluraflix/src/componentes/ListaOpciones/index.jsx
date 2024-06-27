import { useContext } from "react";
import styled from "styled-components";
import { VideosContext } from "../VideosContext/VideosContext";

const DivSelectStilo = styled.div`
    display: flex;
    flex-direction: column;
    color:white;
    gap: 10px;
    select {
        color: white;
        height: 62px;
    }
`

const ListaOpciones = ({valor, manejador}) => {
    
    const {videos, setEquipos} = useContext(VideosContext)
    let equipos = []
    videos.forEach(video => {
        equipos.push(video.categoria)
    });
    equipos = [...new Set(equipos)]
    
  return (
    <DivSelectStilo>
        <label>Categoria</label>
        <select onChange={e=>manejador(e.target.value)}>
            <option value="" defaultValue='' hidden>Selecciona una opcion</option>
            {equipos.map(equipo=><option selected={equipo === valor ? true : false} value={equipo.toLowerCase()} key={equipo} >{equipo.toLowerCase()}</option>)}
        </select>
      
    </DivSelectStilo>
  )
}

export default ListaOpciones
