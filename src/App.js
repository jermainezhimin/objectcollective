import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Avatar } from 'antd';
import Logo from './assets/logo.png';
import Jermaine from './assets/jermaine.jpg';
import './App.css';

import Home from './components/Home';
import Cards from './components/Cards';
const { Header, Content, Footer } = Layout;


class App extends Component {
  render() {
    return (
      <Router>
        <Layout className="layout">
          
          
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%', padding: '0px 0px' }}>
            <div className="logo"> 
              <div>
                <img src={Logo} alt='' />
                <p >OBJECT COLLECTIVE</p>
              </div>
            </div>
            <Menu theme="light" mode="horizontal"
              defaultSelectedKeys={['1']} style={{ lineHeight: '64px' }}>
              <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/cards">Cards</Link></Menu.Item>
            </Menu>
          </Header>
          

          <Content style={{ overflow:'hidden', marginTop: 64 }}>
            <Route exact path="/" component={Home} />
            <Route path="/cards" component={Cards} />
          </Content>

          
          <Footer style={{ textAlign: 'center' }}>
            Object Collective ©2018 Created by <a href="http://www.jermainecheng.com">Jermaine Cheng</a> x <a href="mailto:beachcombersemporium@gmail.com">Beachcomber's Emporium</a> 
            <div style={{float:"right"}}>
              <Avatar style={{margin:'auto 5px'}} src={Jermaine}/> 
              <Avatar style={{margin:'auto 5px', background:'orange'}}>BE</Avatar>
            </div>
          </Footer>
        </Layout>
      </Router>
    );
  }
}

export default App;
