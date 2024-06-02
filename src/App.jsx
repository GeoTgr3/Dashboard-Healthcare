import { Layout } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { Route, BrowserRouter as Router, Routes, useNavigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Alert from './components/Alert';
import Dashboard from './components/Dashboard';
import Landing from './components/Landing';
import Logo from './components/Logo';
import MDO from './components/MDO';
import MSS from './components/MSS';
import MenuList from './components/MenuList';
import Page from './components/Page';
import Reference from './components/Reference';
import { useAuth } from './useAuth';

const { Sider } = Layout;

const AppContent = ({ setDashboardUrl }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const hasNavigated = useRef(false);

  useEffect(() => {
    if (user && !hasNavigated.current) {
      navigate('/landing');
      hasNavigated.current = true;
    }
  }, [user, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Page />} />
      <Route
        path="/mdo"
        element={
          <PrivateRoute>
            <MDO />
          </PrivateRoute>
        }
      />
      <Route
        path="/mss"
        element={
          <PrivateRoute>
            <MSS />
          </PrivateRoute>
        }
      />
      <Route
        path="/ref"
        element={
          <PrivateRoute>
            <Reference />
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/alert"
        element={
          <PrivateRoute>
            <Alert />
          </PrivateRoute>
        }
      />
      <Route path="/page" element={<Page />} />
      <Route
        path="/landing"
        element={
          <PrivateRoute>
            <Landing />
          </PrivateRoute>
        }
      />
      <Route
        path="/app"
        element={
          <PrivateRoute>
            <AppLayout setDashboardUrl={setDashboardUrl} />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

const AppLayout = ({ setDashboardUrl }) => {
  const [dashboardUrl, setDashboardUrlState] = useState('');

  useEffect(() => {
    setDashboardUrl(dashboardUrl);
  }, [dashboardUrl, setDashboardUrl]);

  return (
    <Layout>
      <Sider width={350} className="sidebar">
        <Logo />
        <MenuList setDashboardUrl={setDashboardUrlState} />
      </Sider>
      {dashboardUrl && (
        <iframe src={dashboardUrl} style={{ width: '100%', height: '100vh' }} title="Dashboard"></iframe>
      )}
    </Layout>
  );
};

const App = () => {
  const [dashboardUrl, setDashboardUrl] = useState('');

  return (
    <Router>
      <AppContent setDashboardUrl={setDashboardUrl} />
    </Router>
  );
};

export default App;
