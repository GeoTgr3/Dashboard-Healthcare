import { Layout } from 'antd';
//import { useState } from 'react';
import React, { useState } from 'react';
import Logo from './components/Logo';
import MenuList from './components/MenuList';



const { Header, Sider }=Layout;


function App() {
  const [showDashboard, setShowDashboard] = useState(false);
  const [dashboardUrl, setDashboardUrl] = useState(''); // Add this line

  return (
    <Layout>
    <Sider width={350} className="sidebar">
      <Logo />
      <MenuList setShowDashboard={setShowDashboard} setDashboardUrl={setDashboardUrl} /> {/* Pass setDashboardUrl as a prop */}
    </Sider>
    {showDashboard && (
      <iframe src={dashboardUrl} style={{ width: '100%', height: '100vh' }}></iframe> // Use dashboardUrl as the src
    )}
  </Layout>
  )
}

export default App
//http://localhost:8089/mapstore/#/dashboard/33