import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

// const settings = {
//   disableButtonsControls: true,
//   infinite: true,
//   autoHeight: true
// };

const Layout = styled.div`
`

const CardWrapper = styled.div``

const Title = styled.h2``

const FilmImage = styled.img`
  width:200px;
  height:200px;
`

export default function App() {
  const [films, setFilms] = useState();
  useEffect(() => {
    axios.get(`/api/dev/mock-films`)
      .then(res => {
        setFilms(res.data.films);
      })
  }, []);

  console.log(films);
  return (
    <Layout>
      {films.map(({ title, image_url }) => (
        <CardWrapper>
          <Title>{title}</Title>
          <FilmImage src={image_url} alt={title}></FilmImage>
        </CardWrapper>
      ))}
    </Layout>
  );
}

