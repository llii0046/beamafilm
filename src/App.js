import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import Carousel from "./components/Carousel";
import Button from './components/Button';
import './styles/global.css';

const Layout = styled.div`
   margin-top:100px;  
   display:flex;
   flex-direction:column;
   gap:30px;
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
        <Carousel films={films} />
        <Button onClick={handleClick}>Reload</Button>
    </Layout>
  );
}

