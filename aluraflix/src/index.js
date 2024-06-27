import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import VideosContextProvider from './componentes/VideosContext/VideosContext';
import EditarContextoProvider from './componentes/VideosContext/EditarContexto';
import FormularioContextoProvider from './componentes/VideosContext/FormularioContexto';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <VideosContextProvider>
    <EditarContextoProvider>
      <FormularioContextoProvider>
        <App/>
      </FormularioContextoProvider>
    </EditarContextoProvider>
  </VideosContextProvider>

);


