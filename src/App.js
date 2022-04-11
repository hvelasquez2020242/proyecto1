import './App.css';
import Button from './components/Buttons';
import Contador from './components/numero';
import logoLevelUp from './images/logo.png';
import { useState } from 'react'

function App() {
  const [numClics, setClics] = useState(0);
  const manejarClick = () => {
    setClics(numClics + 1);


  }

  const restar = () => {
    setClics(numClics - 1);

  }
  const reiniciar = () => {
    setClics(0);

  }


  return (
    <div className="App">

      <div className='logoLevelUp'>

        <img className='logo-levelUp' src={logoLevelUp} alt='Logo de level up' />
      </div>
      <div className='container-num'>
        <h1 className='titulo'>Contador</h1>

        <Contador numero={numClics} />

        <Button texto='Aumentar' esBotonClick={true} esBotonClick2={false} manejarClick={manejarClick} />
        <Button texto='Reiniciar' esBotonClick={false} esBotonClick2={true} manejarClick={reiniciar} />
        <Button texto='Restar' esBotonClick={false} esBotonClick2={false} manejarClick={restar} />

      </div>
    </div>
  );
}

export default App;
