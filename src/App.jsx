import { Layout } from 'antd';
//import { useState } from 'react';
import Logo from './components/Logo';
import MenuList from './components/MenuList';

const { Header, Sider }=Layout;
function App() {

  return (
    <Layout>
      <Sider  width={350} className="sidebar">
        <Logo />
        <MenuList />
      </Sider>
    </Layout>
  )
}

export default App
