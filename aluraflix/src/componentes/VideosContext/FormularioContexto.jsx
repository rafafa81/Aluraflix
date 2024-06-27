import { createContext, useState } from "react";

export const FormularioContexto = createContext()

const FormularioContextoProvider = ({children}) => {
    const [titulo, setTitulo] = useState('')
    const [categoria, setCategoria] = useState('')
    const [imagen, setImagen] = useState('')
    const [video, setVideo] = useState('')
    const [descripcion, setDescripcion] = useState('')
    return (
        <FormularioContexto.Provider value={{titulo, setTitulo,categoria, setCategoria,imagen, setImagen,video, setVideo,descripcion, setDescripcion}}>
            {children}
        </FormularioContexto.Provider>
    )
}

export default FormularioContextoProvider