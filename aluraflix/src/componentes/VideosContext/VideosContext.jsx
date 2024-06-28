import { createContext, useEffect, useState } from "react";
import { buscar } from "../../js/conexionAPI";
export const VideosContext = createContext()

const VideosContextProvider = ({ children }) => {
    const [equipos, setEquipos] = useState([])
    const [videos, setVideos] = useState([])

    useEffect(()=>{buscar('/videos', setVideos)},[])
    //console.log(videos)    
    // {
    //     id: '1',
    //     categoria: 'FRONT END',
    //     url: '/img/VideoCard.png',
    //     color: '#6BD1FF',
    //     descripcion:'Alguna descripcion'
    // },
    // {
    //     id: '2',
    //     categoria: 'FRONT END',
    //     url: '/img/VideoCard.png',
    //     color: '#6BD1FF',
    //     descripcion:'Alguna descripcion'
    // },
    // {
    //     id: '3',
    //     categoria: 'BACK END',
    //     url: '/img/VideoCard.png',
    //     color: '#00C86F',
    //     descripcion:'Alguna descripcion'
    // },
    // {
    //     id: '4',
    //     categoria: 'BACK END',
    //     url: '/img/VideoCard.png',
    //     color: '#00C86F',
    //     descripcion:'Alguna descripcion'
    // },
    // {
    //     id: '5',
    //     categoria: 'INNOVACION Y GESTION',
    //     url: '/img/VideoCard.png',
    //     color: '#FFBA05',
    //     descripcion:'Alguna descripcion'
    // },
    // {
    //     id: '6',
    //     categoria: 'INNOVACION Y GESTION',
    //     url: '/img/VideoCard.png',
    //     color: '#FFBA05',
    //     descripcion:'Alguna descripcion'
    // },
    // {
    //     id: '7',
    //     categoria: 'INNOVACION Y GESTION',
    //     url: '/img/VideoCard.png',
    //     color: '#FFBA05',
    //     descripcion:'Alguna descripcion'
    // }
    // ])

    

    
    return (
        <VideosContext.Provider value={{ videos, setVideos, equipos, setEquipos }}>
            {children}
        </VideosContext.Provider>
    )
}

export default VideosContextProvider