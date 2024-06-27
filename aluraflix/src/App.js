import './App.css';
import Header from './componentes/Header'
import GlobalStyles from './componentes/GlobalStyles'
import Banner from './componentes/Banner';
import Footer from './componentes/Footer';
import Main from './Main';
import TeamSection from './componentes/TeamSection';
import { VideosContext } from './componentes/VideosContext/VideosContext';
import { useContext } from 'react';
import ModalZoom from './componentes/ModalZoom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NuevoVideo from './pages/NuevoVideo';

function App() {
  const {videos} = useContext(VideosContext)
  let equiposLocal = []
  videos.forEach(video => {
    let existe = false
    equiposLocal.forEach(equipo=>{
      if(equipo.categoria === video.categoria){
        existe=true
      }
    })
    if(!existe){
      let equipoObjeto = {categoria:video.categoria, color:video.color}
      equiposLocal = [...equiposLocal, equipoObjeto]
    }
    }
  );
  //setEquipos(equiposLocal)
  return (
    <>
      
        <GlobalStyles />
        
        
        <Router>
          <Routes>
            <Route path='/' element={
              <><Header />
              <Banner /><Main>
              {equiposLocal.map((equipo, index) => <TeamSection nombreEquipo={equipo.categoria} colorEquipo={equipo.color} key={index} />)}
              <ModalZoom />
            </Main></>
            }/>
            <Route path='/nueva' element={
              <><Header /><NuevoVideo /></>
              }/>
          </Routes>
        </Router>
        
      
      <Footer />
    </>
  );
}

export default App;
