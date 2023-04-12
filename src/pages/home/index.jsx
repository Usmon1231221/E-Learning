import React from "react"
import { useNavigate } from "react-router-dom"
import { motion, useScroll, useSpring } from "framer-motion"

import Navbar from "../../components/Navbar"
import EdugoLearn from "../../components/EdugoLearn"
import Section from "../../components/Section"
import Showcase from "../../components/showcase/index"
import Explorer from "../../components/Explorer"
import Slider from "../../components/Slider"
import Footer from "../../components/Footer"

const Bar = {
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  height: "10px",
  backgroundColor: "red",
  transformOrigin: "0%",
}

const Home = ({ isAuth, setIsAuth }) => {
  const navigate = useNavigate()
  {
    isAuth ? navigate("/") : navigate("/login")
  }
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX, background: "blue", zIndex: "5" }}
      />
      <Navbar setIsAuth={setIsAuth} />
      <Showcase />
      <Section />
      <EdugoLearn />
      <Explorer />
      <Slider />
      <Footer />
    </>
  )
}

export default Home
