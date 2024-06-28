import { createContext, useState } from "react";



export const EditarContexto = createContext()

const EditarContextoProvider = ({children}) => {
    const [mostrarDialog, setMostrarDialog] = useState(false)
    const [infoCard, setInfoCard] = useState([
        {
            id:0,
            titulo:'',
            categoria:'',
            imagen:'',
            video:'',
            descripcion:'',
            color:''
            
        }
    ])


  return (
    <EditarContexto.Provider value={{mostrarDialog, setMostrarDialog, infoCard, setInfoCard}}>
      {children}
    </EditarContexto.Provider>
  )
}

export default EditarContextoProvider
