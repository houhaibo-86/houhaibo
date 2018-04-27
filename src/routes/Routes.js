import React from "react";
import { BrowserRouter as Router, Route, Link, IndexRoute } from "react-router-dom";

import Routes from "./route";
import Sandwiches from "../component/Sandwiches";
import Tacos from "../component/Tacos";
import Bus from "../component/Bus";
import Cart from "../component/Cart";
import Main from "../component/Main";
import RouteWithSubRoutes from "./RouteWithSubRoutes";

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header , Footer , Sider , Content } = Layout;



class RouteConfigExample extends React.Component{
    // constructor(props){
    //     super(props);
    // }
    state = {
        collapsed: false,
    };
    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
    };
    render(){
        return(
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
                                    <Link to="/main">Main</Link>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Icon type="video-camera" />
                                    <Link to="/tacos">Tacos</Link>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <Icon type="upload" />
                                    <Link to="/sandwiches">Sandwiches</Link>
                                    
                                </Menu.Item>
                                </Menu>
                            </Sider>
                            <Content>
                                <Layout>
                                <Header style={{ background: '#fff', padding: 0 }}>
                                    <Icon
                                    className="trigger i-class"
                                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                    onClick={this.toggle}
                                    />
                                </Header>
                                <Content style={{ margin: '24px 16px 0', padding: 24, background: '#fff', minHeight: 280, overflowY: 'auto' }}>
                                    <div className='divHeight' id="divHeight">
                                        {Routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
                                        {/* <IndexRoute component={Main} /> */}
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


                {/* <ul>
                    <li>
                    <Link to="/tacos">Tacos</Link>
                    </li>
                    <li>
                    <Link to="/sandwiches">Sandwiches</Link>
                    </li>
                </ul>
                <div className="showDiv">
                        {Routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
                </div> */}

                
                </div>
            </Router>
        )
    
    }
};

export default RouteConfigExample;