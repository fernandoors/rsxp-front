import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Container, Flex, Button, Welcome, Title } from './styles';
import Summary from '../Summary';
import Content from '../Content';
import Benefits from '../Benefits';

function App() {
  const [view, setView] = useState('Quem são?')
  function handleSetView(data) {
    return setView(data)
  }

  return (
    <Container>
      <Welcome>
        <h2>Bem vindo ao BBO!</h2>
        <p>Abrimos a caixa preta do mundo da programação para você. Entenda e se encante com o desenvolvimento de software!</p>
      </Welcome>
      <Benefits />
      <Title>{view}</Title>
      <Summary view={view} handleSetView={handleSetView} />

      {view === 'Quem são?' && <Content type='how'/>}
      {view === 'O que precisa?' && <Content type='what' />}
      {view === 'O que ganha?' && <Content type='howMuch' />}

      <Flex>
        <Link to='/profile'>
          <Button>
            Analisar Perfil
          </Button>
        </Link>
      </Flex>
    </Container>
  );
}

export default App;
