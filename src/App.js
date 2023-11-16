import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {
  
  const times = [
    {
      nome: 'Duelista',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
  },
  {
      nome: 'Sentinela',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
  },
  {
      nome: 'Iniciador',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
  },
  {
      nome: 'Controlador',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
  },
  {
      nome: 'Flex',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
  },
  
  ]
  
  const [colaboradores, setColaboradores] = useState([])
  
  const aoNovoColaboradorAdicionado = (colaborador) =>{
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      
      <Formulario 
        aoColaboradorCadastrado={aoNovoColaboradorAdicionado}
        times={times.map(time => time.nome)}/>
      
      {times.map(time => <Time 
                              key={time.nome} 
                              nome={time.nome} 
                              corPrimaria={time.corPrimaria} 
                              corSecundaria={time.corSecundaria}
                              colaboradores={colaboradores.filter(colaborador => colaborador.time == time.nome )} />)}
    </div>
  );
}

export default App;
