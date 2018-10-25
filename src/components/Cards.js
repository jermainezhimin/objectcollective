import React, { Component } from 'react';
import { Carousel } from 'antd';
import Banner1 from '../assets/banner1.png';
import Banner2 from '../assets/banner2.png';
import Banner3 from '../assets/banner3.png';
import './Cards.css';

class Cards extends Component {
  render() {
    return (
        <Carousel autoplay>
            <img className="cardbanner" src={Banner1} alt='' />
            <img className="cardbanner" src={Banner2} alt='' />
            <img className="cardbanner" src={Banner3} alt='' />
        </Carousel>

    );
  }
}

export default Cards;
