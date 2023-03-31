import React from 'react'
import Navbar from '../../components/Navbar'
import EdugoLearn from '../../components/EdugoLearn'
import Section from '../../components/Section'
import Showcase from '../../components/showcase/index'
import { useNavigate } from 'react-router-dom'

const Home = ({ isAuth, setIsAuth }) => {
  const navigate = useNavigate()
  { isAuth ? navigate('/') : navigate('/login') }
  return (
    <div>
      <Navbar setIsAuth={setIsAuth} />
      <Showcase />
      <Section />
      <EdugoLearn />
    </div>
  )
}

export default Home