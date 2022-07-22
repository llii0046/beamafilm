import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Layout = styled.div`
`

const CardWrapper = styled.div`
  width:300px;
  height:300px;  
`

const Title = styled.h2`
  font-size:16px;
  width:200px;
  height:20px;
  overflow: hidden;
`

const FilmImage = styled.img`
  width:200px;
  height:200px;
`
const Button = styled.button`
  width: 100px;
  height: 30px;
`
export default function App() {
  const [films, setFilms] = useState([{}]);
  const request = () => {
    axios.get(`/api/dev/mock-films`)
      .then(res => {
        setFilms(res.data.films);
      })
  }

  useEffect(() => {
    request();
  }, []);


  const handleClick = () => {
    request();
  }

  return (
    <Layout>
      <Swiper navigation={true} modules={[Navigation]} slidesPerView={7} >
        {films.map(({ title, image_url,index }) => (
          <SwiperSlide key={index}>
            <CardWrapper key={index}>
              <Title>{title}</Title>
              <FilmImage src={image_url} alt={title}></FilmImage>
            </CardWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
      <Button onClick={handleClick}>Reload</Button>
    </Layout>
  );
}

