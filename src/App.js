  
import './App.css';
import Showcase from './components/showcase/index'
import Navbar from './components/Navbar';
import styled from 'styled-components';
import Section from './components/Section';

const AppContainer = styled('div')`
  margin: 0 4rem;
`

function App() {
  return (
    <AppContainer>
        <Navbar/>
        <Showcase/>
        <Section/>
    </AppContainer>
    
  );
}

export default App;
