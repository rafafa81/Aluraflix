
import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { EditarContexto } from '../VideosContext/EditarContexto'
import CampoTexto from '../CampoTexto'
import ListaOpciones from '../ListaOpciones'
import TextArea from '../TextArea'
import BotonGuardar from '../BotonGuardar'
import BotonIcono from '../BotonIcono'
import { VideosContext } from '../VideosContext/VideosContext'
import { FormularioContexto } from '../VideosContext/FormularioContexto'
import { editar } from '../../js/conexionAPI'

const Overlay = styled.div`
background-color:rgba(0,18,51,.5);
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`
const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 294px;
    /* background: transparent; */
    background-color: #03122F;
    padding: 0;
    border: 5px solid #6BD1FF;
    border-radius: 15px;
    width: 974px;
    height: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items:flex-start;
    justify-content: space-between;
    padding: 0px 150px;
    padding-top:100px;
    padding-bottom: 100px;
    box-sizing: border-box;
    gap:40px;

    h2 {
        color: #2271D1;
        font-size: 60px;
        font-family: 'SourceSansProBlack';
        

    } 
    
    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap:40px;

        input, select, textarea{
            border: 2px solid #2271D1;
            background-color: #03122F;
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
            justify-content: space-between;
        }
    }
`

const ModalZoom = () => {
    const { mostrarDialog, setMostrarDialog, infoCard, setInfoCard } = useContext(EditarContexto)
    const { videos, setVideos } = useContext(VideosContext)
    const { titulo, setTitulo, categoria, setCategoria, imagen, setImagen, video, setVideo, descripcion, setDescripcion, id, setId } = useContext(FormularioContexto)
    function iniciarValores() {
        setId(infoCard[0].id)
        setTitulo(infoCard[0].titulo)
        setCategoria(infoCard[0].categoria)
        setImagen(infoCard[0].imagen)
        setVideo(infoCard[0].video)
        setDescripcion(infoCard[0].descripcion)
    }
    useEffect(() => iniciarValores(), [infoCard])

    function enviarInformacion(e) {
        e.preventDefault()
    }
    function guardarInformacion() {
        let color = ''
        switch (categoria) {
            case 'front end':
                color = '#6BD1FF'
                break;
            case 'back end':
                color = "#00C86F"
                break;
            case 'inovacion y gestion':
                color = "#FFBA05"
                break;
        }
        let objetoGuardar = {
            id: id,
            titulo: titulo,
            categoria: categoria,
            imagen: imagen,
            video: video,
            descripcion: descripcion,
            color: color
        }
        setInfoCard([objetoGuardar])
        let modificado = []
        videos.map(video => {
            if (video.id === infoCard[0].id) {
                video.titulo = infoCard[0].titulo
                video.categoria = infoCard[0].categoria.toUpperCase()
                video.imagen = infoCard[0].imagen
                video.video = infoCard[0].video
                video.descripcion = infoCard[0].descripcion
                video.color = color
            }
            modificado = [...modificado, video]
        })
        setVideos([...modificado])
        editar('/videos', objetoGuardar)

    }
    function limpiarInformacion() {
        setTitulo('')
        setCategoria('')
        setImagen('')
        setVideo('')
        setDescripcion('')
    }
    return <>
        {mostrarDialog && <>
            <Overlay />
            <DialogEstilizado onClose={() => setMostrarDialog(!mostrarDialog)}>
                <h2>EDITAR CARD:</h2>
                <form method='dialog' onSubmit={enviarInformacion}>
                    <CampoTexto texto='Titulo' value={titulo} manejador={setTitulo} />
                    <ListaOpciones valor={categoria} manejador={setCategoria} />
                    <CampoTexto texto='Imagen' value={imagen} manejador={setImagen} />
                    <CampoTexto texto='Video' value={video} manejador={setVideo} />
                    <TextArea valor={descripcion} manejador={setDescripcion} />
                    <div>
                        <BotonGuardar value='GUARDAR' manejador={() => {
                            guardarInformacion()
                            guardarInformacion()
                        }} />
                        <BotonGuardar value='LIMPIAR' manejador={limpiarInformacion} />
                    </div>
                    <BotonIcono formMethod='dialog'>
                        <img src='/img/X - cancel.png' alt='' onClick={() => setMostrarDialog(!mostrarDialog)} />
                    </BotonIcono>
                </form>
            </DialogEstilizado>
        </>
        }
    </>
}

export default ModalZoom
