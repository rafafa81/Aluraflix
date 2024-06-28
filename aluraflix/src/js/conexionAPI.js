import axios from 'axios'
import { VideosContext } from '../componentes/VideosContext/VideosContext'
import { useContext } from 'react'

export const api = axios.create({
    baseURL:'http://localhost:3000/'
})

export const buscar = async (url, setData) => {
    let res = await api.get(url)
    setData(res.data)
}

export const agregar = async (url, video) => {
    let res = await api.post(url,{
        id:video.id,
        titulo:video.titulo,
        categoria:video.categoria,
        imagen:video.imagen,
        video:video.video,
        descripcion:video.descripcion,
        color:video.color
    })
}

export const editar = async (url, video) => {
    let res = await api.put(url+`/${video.id}`, {
        id:video.id,
        titulo:video.titulo,
        categoria:video.categoria,
        imagen:video.imagen,
        video:video.video,
        descripcion:video.descripcion,
        color:video.color
    })
}

export const eliminar = async (url) => {
    let res = await api.delete(url)
}