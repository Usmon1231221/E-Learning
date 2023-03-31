
import './App.css';
import Showcase from './components/showcase/index'
import Navbar from './components/Navbar';
import styled from 'styled-components';
import Section from './components/Section';
import Explorer from './components/Explorer';
import EdugoLearn from './components/EdugoLearn';

const AppContainer = styled('div')`
  margin: 0 4rem;
`

function App() {
  return (
    <AppContainer>
      <Navbar />
      <Showcase />
      <Section />
      <EdugoLearn />
      <Explorer/>
    </AppContainer>

  );
}

export default App;
