import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import Back from '../assets/back.png';
import EightP from '../assets/8P.png';
import CaseDay from '../assets/case-day.png';
import CaseNight from '../assets/case-night.png';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Particles from 'react-particles-js';
import './Home.css';

class Home extends Component {
    constructor() {
        super();
        this.state = {};
    }
  
    render() {
    return (
        <div style={{background: '#fff', minHeight: 280 }}>
            <Row className="banner">
                <Particles params={{ "particles": { "number": { "value": 160,"density": { "enable": false }},
                "size": { "value": 7, "random": true, "anim": { "speed": 4, "size_min": 1 }}, "color": {"value": "#FFFAEA" },
                "line_linked": { "enable": false }, "move": { "random": true, "speed": 1, "direction": "left",
                "out_mode": "out" }, "shape": { "type": "star"}}}} />
                
                <div style={{ color: 'white',position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'}}>
                    <div style={{ height:'130px', borderBottom: '10px solid white' ,fontSize: '100px', fontWeight: 'bolder'}}>
                        OBJECTIVE
                    </div>
                    <div style={{ height:'120px', fontSize: '100px', fontWeight: 'bolder', transform: 'rotate(-180deg)'}}>
                        OBJECTIVE
                    </div>
                    <div style={{textAlign:'center', height:'20px', fontSize: '20px', fontWeight: 'lighter'}}>
                        OBJECT COLLECTIVE: THE DAY AND NIGHT EDITIONS
                    </div>
                </div>

                <Flippy flipOnHover={true} flipOnClick={false} flipDirection="horizontal" ref={(r) => this.flippy = r} 
                    style={{ width: '200px', height: '332px', padding: '0px', position: 'absolute', top: '50%', left: '75%', transform: 'translate(-50%,-50%) rotate(10deg)' }} >
                    <FrontSide style={{padding: '0px'}}> <img alt='' style={{borderRadius:'20px'}} src={Back}/> </FrontSide>
                    <BackSide style={{padding: '0px'}}> <img alt='' style={{borderRadius:'20px'}} src={EightP}/> </BackSide>
                </Flippy>
            </Row>
            <Row type='flex' justify='center' align='center' style={{height:'500px'}}>
                <Col style={{ userSelect:'none', display: 'flex', alignItems: 'center', justifyContent: 'center'}} span={12}> 
                    <div className='case'> <img alt='' src={CaseNight}/> </div>
                    <div className='case'> <img alt='' src={CaseDay}/> </div>
                </Col>
                <Col style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0px 15% 0px calc(5% + 10px)' }} span={12}>
                    <div>
                        <div style={{width:'210px', borderBottom: '5px solid grey', fontSize:'30px', fontWeight:'bolder'}} >BACKGROUND</div>
                        <div style={{fontSize:'17px', margin: '10px 0px'}}>
                            Objective collective started as Jermaine's side project. It explores the idea of using tarot cards
                            to construct a subconscious reflective narrative based on baysian probability.
                        </div>

                        <div style={{fontSize:'17px', margin: '10px 0px'}}>
                            This unique tarot deck reimagines the 76 tarot cards as quirky objects. 
                        </div>
                    </div>
                </Col>
            </Row>
            <Row type='flex' justify='center' align='center' style={{height:'500px'}}>
                <Col style={{  display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0px calc(5% + 10px) 0px 15%' }} span={12}> 
                <div>
                        <div style={{width:'190px', borderBottom: '5px solid grey', fontSize:'30px', fontWeight:'bolder'}} >SUPPORT ME</div>
                        <div style={{fontSize:'17px', margin: '10px 0px'}}>
                            This project needs help to get into your hands! Check out the kickstarter page to fund the project or leave some feedback.
                        </div>
                        <Button type='primary' size='large' href='https://www.kickstarter.com/projects/1988162704/360671320?ref=bel4aw&token=d33e9c26'> Help Kickstart </Button>
                    </div>
                </Col>
                <Col style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} span={12}>
                    <Flippy flipOnHover={true} flipOnClick={false} flipDirection="horizontal" ref={(r) => this.flippy = r} 
                        style={{ width: '200px', height: '332px', padding: '0px', position: 'absolute', top: '50%', left: '75%', transform: 'translate(-50%,-50%) rotate(10deg)' }} >
                        <FrontSide style={{padding: '0px'}}> <img alt='' style={{borderRadius:'20px'}} src={Back}/> </FrontSide>
                        <BackSide style={{padding: '0px'}}> <img alt='' style={{borderRadius:'20px'}} src={EightP}/> </BackSide>
                    </Flippy>
                    <Flippy flipOnHover={true} flipOnClick={false} flipDirection="horizontal" ref={(r) => this.flippy = r} 
                        style={{ width: '200px', height: '332px', padding: '0px', position: 'absolute', top: '50%', left: '75%', transform: 'translate(-50%,-50%) rotate(10deg)' }} >
                        <FrontSide style={{padding: '0px'}}> <img alt='' style={{borderRadius:'20px'}} src={Back}/> </FrontSide>
                        <BackSide style={{padding: '0px'}}> <img alt='' style={{borderRadius:'20px'}} src={EightP}/> </BackSide>
                    </Flippy>
                    <Flippy flipOnHover={true} flipOnClick={false} flipDirection="horizontal" ref={(r) => this.flippy = r} 
                        style={{ width: '200px', height: '332px', padding: '0px', position: 'absolute', top: '50%', left: '75%', transform: 'translate(-50%,-50%) rotate(10deg)' }} >
                        <FrontSide style={{padding: '0px'}}> <img alt='' style={{borderRadius:'20px'}} src={Back}/> </FrontSide>
                        <BackSide style={{padding: '0px'}}> <img alt='' style={{borderRadius:'20px'}} src={EightP}/> </BackSide>
                    </Flippy>
                </Col>
            </Row>
        </div>
    );
  }
}

export default Home;
