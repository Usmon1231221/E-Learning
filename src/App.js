import './App.css';
import Navbar from './components/Navbar';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login';
import Home from './pages/home'
import { useState } from 'react';


const AppContainer = styled(BrowserRouter)`
  margin: 0 4rem;
`

function App() {
  const [isAuth, setIsAuth] = useState(false)

  return (
    <AppContainer>
      <Routes>
        <Route path={'/'} element={<Home isAuth={isAuth} setIsAuth={setIsAuth} />} />
        <Route path={'/login'} element={<LoginPage setIsAuth={setIsAuth} />} />
      </Routes>
    </AppContainer>
  );
}
 
export default App;
