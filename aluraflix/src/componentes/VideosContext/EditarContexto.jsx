import { createContext, useState } from "react";



export const EditarContexto = createContext()

const EditarContextoProvider = ({children}) => {
    const [mostrarDialog, setMostrarDialog] = useState(false)
    const [infoCard, setInfoCard] = useState([
        {
            id:0,
            categoria:'',
            url:'',
            color:'',
            descripcion:''
        }
    ])


  return (
    <EditarContexto.Provider value={{mostrarDialog, setMostrarDialog, infoCard, setInfoCard}}>
      {children}
    </EditarContexto.Provider>
  )
}

export default EditarContextoProvider
