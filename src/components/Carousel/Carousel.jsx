import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/mousewheel";
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from "swiper";
import Card from '../Card';
import styled from 'styled-components'
import {color} from '../../styles/variables'
const {borderColorDark, backgroundColorDark} = color;

const Frame = styled.div`
    background-color: ${backgroundColorDark};
	border: 2px solid ${borderColorDark};
	border-radius: 8px;
    padding: 30px;
`

const Carousel = (props) => {
    const { films } = props
    return (
        <Frame>
            <Swiper navigation={true} modules={[Navigation]} mousewheel={true} slidesPerView={'auto'}>
                {films.map(({ title, image_url }) => (
                    <SwiperSlide>
                        <Card title={title} image_url={image_url} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Frame>
    )
};

export default Carousel;
