import React from 'react'
import './App.css';
import { Layout } from 'antd';
import { Typography } from 'antd';
import { Avatar } from 'antd';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import {  Breadcrumb } from 'antd';

//const { Header, Content, Sider } = Layout;
const { Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

function App() {
  return (
    <div className="App">
          <Layout>
               <Header style = {{padding : 20}}>
                  <Avatar style = {{float: 'right'}} src = './dp.jpeg' />
                  <Title style = {{color:'white'}} level={3}>Dinesh Jadhav</Title>
                </Header>
              
                <Layout>
                  <Sider>
                    <Menu
                    defaultSelectedKeys = {['Dashboard']}
                    mode = 'inline'
                    >
                      <Menu.Item>Dashboard</Menu.Item>  
                          <SubMenu 
                            title = {
                            <span>
                              <MailOutlined style={{ fontSize: '16px', color: '#08c' }} />
                              <span>About Us</span>
                                
                             </span>
                          }
                      >
                              <Menu.ItemGroup key = 'AboutUs' title = 'Country Name'>
                                <Menu.Item key = 'Location1'> Location 1</Menu.Item>
                                <Menu.Item key = 'Location2'> Location 2</Menu.Item>
                              </Menu.ItemGroup>
                          </SubMenu>
                    </Menu>
                    </Sider>   
                  </Layout>           
            <Layout>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              </Breadcrumb>
                <div className="site-layout-content" >Content</div>
            </Content>  
            <Footer style={{ textAlign: 'center' }}>Project End</Footer>
 
            </Layout>
          </Layout>      
    </div>
  );
}

export default App;
