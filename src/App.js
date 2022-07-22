import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/mousewheel";
import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const Layout = styled.div`
  padding: 30px;
`

const CardWrapper = styled.div`
 padding:0 10px;
 margin: 0 10px;
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
    &：hover {
      border: 1px #C6C6C6 solid;
      box-shadow: 1px 1px 1px #EAEAEA;
      color: #333333;
      background: #F7F7F7;
    }
    &:active {
      box-shadow: inset 1px 1px 1px #DFDFDF;   
    }
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
      <Swiper navigation={true} modules={[Navigation]} mousewheel={true} slidesPerView={7}>
        {films.map(({ title, image_url }) => (
          <SwiperSlide>
            <CardWrapper>
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

