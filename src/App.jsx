import { Layout } from 'antd';
//import { useState } from 'react';
import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Logo from './components/Logo';
import MenuList from './components/MenuList';


const { Header, Sider }=Layout;


function App() {
  const [showDashboard, setShowDashboard] = useState(false);
  const [dashboardUrl, setDashboardUrl] = useState(''); // Add this line

  return (
    <Router>
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/app" element={
        <Layout>
          <Sider width={350} className="sidebar">
            <Logo />
            <MenuList setShowDashboard={setShowDashboard} setDashboardUrl={setDashboardUrl} />
          </Sider>
          {showDashboard && (
            <iframe src={dashboardUrl} style={{ width: '100%', height: '100vh' }}></iframe>
          )}
        </Layout>
      } />
    </Routes>
  </Router>
  )
}

export default App
//http://localhost:8089/mapstore/#/dashboard/33