import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { CardInfo } from "./card"
import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"
import ReactStars from "react-stars"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/scrollbar"

const SwiperSlider = styled(SwiperSlide)`
  display: flex;
  gap: 1.3rem;
  padding: 2rem;
  -webkit-box-shadow: 1px -5px 45px -17px rgba(34, 60, 80, 0.2) inset;
  -moz-box-shadow: 1px -5px 45px -17px rgba(34, 60, 80, 0.2) inset;
  box-shadow: 1px -5px 45px -17px rgba(34, 60, 80, 0.2) inset;
  border-radius: 30px;
  margin: 1rem 2rem;
`

const FirstContent = styled("img")`
  width: 100px;
  height: 100px;
  border-radius: 20px;
  background-color: lightgray;
`
const SecondContent = styled("div")``

const Title = styled("h1")`
  color: darkblue;
`
const SubTitle = styled("p")`
  width: 350px;
  color: gray;
`
const User = styled("h5")`
  color: blue;
`

const Student = styled("p")`
  font-size: 15px;
  color: lightgray;
`

const Slider = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      loop={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {CardInfo.map((d, index) => (
        <SwiperSlider key={index}>
          <FirstContent src={d.avatar} />
          <SecondContent>
            <ReactStars count={5} size={24} color1={"#ffd700"} />
            <Title>{d.title}</Title>
            <SubTitle>{d.subTitle}</SubTitle>
            <User>{d.user}</User>
            <Student>{d.student}</Student>
          </SecondContent>
        </SwiperSlider>
      ))}
    </Swiper>
  )
}

export default Slider
