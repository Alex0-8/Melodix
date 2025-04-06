import React, {Component} from 'react';
import Header from './components/header';
import Song from './components/song';
import './styles.css';

class App extends Component{
  componentDidMount() {
    console.log("La app se ha cargado")
  }

  render(){
    return (
      <div className="App">
        <Header />
        
        <section className='songs-section'>
          <div>
            <i><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24"><path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path></svg></i>
            <p><span>Tu biblioteca</span></p>
          </div>
  
          <Song name="Luz de Neón" artist="Aurora Vega" album="Reflejos Urbanos" />
          <Song name="Ecos del Ayer" artist="Sombra Lunar" album="Sombras y Recuerdos" />
          <Song name="Caminos Paralelos" artist="Esteban Cruz" album="Destino Cruzado" />
          <Song name="Horizonte Azul" artist="Zafiro" album="Cielos Abiertos" />
          <Song name="Noche Estelar" artist="Lía Nova" album="Galaxia Interior" />
          <Song name="Volver a Empezar" artist="Daniela Mar" album="Renacer" />
        </section>
      </div>
    );   
  }
}

export default App;