import React from 'react'
import styled from 'styled-components';
import { devices } from '../../styles/variables';

const CardWrapper = styled.div`
  padding:10px;
  margin:10px;
  width: 230px;
  height: 280px;
  background-color:black;
  display:flex;
  justify-content:center;
  align-items:center;

	@media ${devices.tablet} {
		width: 290px;
    height: 340px;
	}
`

const FilmImage = styled.img`
  width: 220px;
  height:270px;

  &:hover{
    width:230px;
    height:280px;
    transition-duration: 0.6s;
  }

  @media ${devices.tablet} {
    width:250px;
    height:300px;

  &:hover{
    width:290px;
    height:340px;
    transition-duration: 0.6s;
  }
	}
`

const Card = (props) => {
  const { title, image_url } = props
  return (
    <CardWrapper>
      <FilmImage src={image_url} alt={title}></FilmImage>
    </CardWrapper>
  )
}

export default Card;