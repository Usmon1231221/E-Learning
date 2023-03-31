import './App.css';
import Navbar from './components/Navbar';
import styled from 'styled-components';
import Section from './components/Section';
import Explorer from './components/Explorer';
import EdugoLearn from './components/EdugoLearn';

const AppContainer = styled(BrowserRouter)`
  margin: 0 4rem;
`

function App() {
  const [isAuth, setIsAuth] = useState(false)

  return (
    <AppContainer>
      <Navbar />
      <Showcase />
      <Section />
      <EdugoLearn />
      <Explorer/>
      <Routes>
        <Route path={'/'} element={<Home isAuth={isAuth} setIsAuth={setIsAuth} />} />
        <Route path={'/login'} element={<LoginPage setIsAuth={setIsAuth} />} />
      </Routes>
    </AppContainer>
  );
}
 
export default App;
