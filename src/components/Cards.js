import React, { Component } from 'react';
import { Row, Carousel } from 'antd';
import Particles from 'react-particles-js';
import './Cards.css';

class Cards extends Component {
  render() {
    return (
        <Carousel autoplay>
          <div className='banner'><h3>1</h3></div>
          <div className='banner'><h3>2</h3></div>
          <div className='banner'><h3>3</h3></div>
          <div className='banner'><h3>4</h3></div>
        </Carousel>
    );
  }
}

export default Cards;
