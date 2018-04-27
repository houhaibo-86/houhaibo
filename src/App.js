import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link, IndexRoute  } from "react-router-dom";
// import { IndexRoute } from 'react-router';

import './App.css';
// import Products from './component/Products';
import Routers from './routers/routers';
import Routes from './routers/Route';
import Products from './component/Products';
import About from './component/About';
import Home from './component/Home';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header , Footer , Sider , Content } = Layout;


const Blank = (props) =>(
  <div>
    <h1>This Is Blank Tip</h1>
  </div>
  
);

class App extends React.Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <Router>
        <div>
      <Layout>
        <Header>
          <div className="logo ant-layout-sider" />
          <h1>Header</h1>
        </Header>
        <Layout>
          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
          >
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Icon type="user" />
                <Routes />
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <Link to="/about">About</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload" />
                <Link to="/home">Home</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                  className="trigger i-class"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggfle}
                />
              </Header>
              <Content style={{ margin: '24px 16px 0', padding: 24, background: '#fff', minHeight: 280, overflowY: 'auto' }}>
                <div className='divHeight' id="divHeight">
                  
                    <Route path="/Products" component={Products} />
                    <Route path="/About" component={About} />
                    <Route path="/Home" component={Home} />
                </div>
              </Content>
            </Layout>
          </Content>
        </Layout>
        <Footer>
          Footer
          <Icon type="fast-backward" />
        </Footer>

      </Layout>
      
      
          
          
      </div>
  </Router>
    )
  }
  
}


export default App;
