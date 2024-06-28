import styled from "styled-components";
import React, { useContext, useEffect } from 'react'
import CampoTexto from "../componentes/CampoTexto";
import { EditarContexto } from "../componentes/VideosContext/EditarContexto";
import { VideosContext } from "../componentes/VideosContext/VideosContext";
import { FormularioContexto } from "../componentes/VideosContext/FormularioContexto";
import ListaOpciones from "../componentes/ListaOpciones";
import TextArea from "../componentes/TextArea";
import BotonGuardar from "../componentes/BotonGuardar";
import { agregar } from "../js/conexionAPI";

const MainStyle = styled.main`
  margin-top: 5px;
  padding-top: 40px;
  background-color: black;
  color:white;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  box-shadow: inset 0 59px 60px -60px #2271D1;
  &>div:nth-child(1){
    display: flex;
    flex-direction: column;
    align-items: center;
    &>h3 {
      font-size: 60px ;
      font-family: 'SourceSansProBlack' ;
      margin-bottom: 20px;
    }
    &>label {
      font-size: 20px;
      margin-bottom: 20px;
    }
  }
  &>div:nth-child(2) {
    margin-bottom: 20px;
    display: flex;
    &>label {
      font-size: 36px;
      border-top: 2px solid grey;
      border-bottom: 2px solid grey;
      width: 100%;
      padding: 20px 0;
    }
  }
  form {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap:40px;

        input, select, textarea{
            border: 2px solid gray;
            background-color: black;
            border-radius: 15px;
            padding-left: 15px;
        }
        /* button {
            position: relative;
            top: 20px;
            right: 60px;
        } */
        div:nth-child(6){
            display: flex;
            justify-content: flex-start;
            gap: 30px;
            margin-bottom: 50px;
        }
    }
`

const NuevoVideo = () => {
  const {mostrarDialog, setMostrarDialog, infoCard, setInfoCard} = useContext(EditarContexto)
    const {videos, setVideos} = useContext(VideosContext)
    const {titulo, setTitulo,categoria, setCategoria,imagen, setImagen,video, setVideo,descripcion, setDescripcion} = useContext(FormularioContexto)
    useEffect(()=>iniciarValores(),[infoCard])
    function iniciarValores(){
        setTitulo('')
        setCategoria('')
        setImagen('')
        setVideo('')
        setDescripcion('')
    }
  function enviarInformacion(e) {
    e.preventDefault()
  }
  function limpiarInformacion(){
    setTitulo('')
    setCategoria('')
    setImagen('')
    setVideo('')
    setDescripcion('')
}

function guardarInformacion(){
  let color=''
  switch( categoria ){
    case 'front end':
      color='#6BD1FF'
      break;
    case 'back end':
      color="#00C86F"
      break;
    case 'inovacion y gestion':
      color="#FFBA05"
      break;
  }
  let objetoGuardar = {
      id:(videos.length+1).toString(),
      titulo:titulo,
      categoria:categoria.toUpperCase(),
      imagen:imagen,
      video:video,
      descripcion:descripcion,
      color:color
  }
  console.log(objetoGuardar)
  setVideos([...videos, objetoGuardar])
  agregar('/videos', objetoGuardar)
}
  return (
    <MainStyle>
      <div>
        <h3>NUEVO VIDEO</h3>
        <label> COMPLETA EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</label>
      </div>
      <div>
        <label>Crear Tarjeta</label>
      </div>
      <div>
        <form onSubmit={enviarInformacion}>
          <CampoTexto texto='Titulo' value={titulo} manejador={setTitulo} />
          <ListaOpciones valor={categoria} manejador={setCategoria} />
          <CampoTexto texto='Imagen' value={imagen} manejador={setImagen} />
          <CampoTexto texto='Video' value={video} manejador={setVideo} />
          <TextArea valor={descripcion} manejador={setDescripcion} />
          <div>
            <BotonGuardar value='GUARDAR' 
            manejador={() => {guardarInformacion()}}
             />
            <BotonGuardar value='LIMPIAR' manejador={limpiarInformacion} />
          </div>
        </form>
      </div>
    </MainStyle>
  )
}

export default NuevoVideo
