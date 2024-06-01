import { Layout } from 'antd';
//import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Alert from './components/Alert';
import Dashboard from './components/Dashboard';
import HomePage from './components/HomePage';
import Logo from './components/Logo';
import MDO from './components/MDO';
import MSS from './components/MSS';
import MenuList from './components/MenuList';
import Page from './components/Page';
import Reference from './components/Reference';
const { Header, Sider }=Layout;

function App() {
  const [showDashboard, setShowDashboard] = useState(false);
  const [dashboardUrl, setDashboardUrl] = useState(''); // Add this line

  return (
    <Router>
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/mdo" element={<MDO />} />
      <Route path="/mss" element={<MSS />} />
      <Route path="/ref" element={<Reference />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/alert" element={<Alert />} />
      <Route path="/page" element={<Page />} />



      

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