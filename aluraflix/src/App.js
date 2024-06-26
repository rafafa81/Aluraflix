import logo from './logo.svg';
import './App.css';
import Header from './componentes/Header'
import GlobalStyles from './componentes/GlobalStyles'
import Banner from './componentes/Banner';
import Footer from './componentes/Footer';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header/>
      <Banner/>

      <Footer/>
    </>
  );
}

export default App;
