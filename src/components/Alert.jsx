import { LeftOutlined } from '@ant-design/icons';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MSSIcon from '@material-ui/icons/Assessment';
import MDOIcon from '@material-ui/icons/AssignmentTurnedIn';
import ReferenceIcon from '@material-ui/icons/Book';
import DashboardIcon from '@material-ui/icons/Dashboard';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dashboard from "./Dashboard";
import MDO from "./MDO";
import MSS from "./MSS";
import Reference from "./Reference";

const useStyles = makeStyles((theme) => ({
  sidebar: {
    width: 250,
    backgroundColor: '#001529', // Dark blue background
    color: 'white',
    height: '100vh',
  },
  mainContent: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#001529', // Dark blue background
    marginLeft: 250, // Ensures the content is next to the sidebar
    minHeight: '100vh', // Ensure it covers the full height
    display: 'flex',
    flexDirection: 'column',
  },
  listItem: {
    color: 'white',
    '&:hover': {
      backgroundColor: 'white', // Slightly lighter blue on hover
    },
  },
  listItemIcon: {
    color: 'white',
  },
  backLink: {
    color: '#fff',
    fontSize: '20px',
    padding: '10px',
  },
}));

const Alert = () => {
  const classes = useStyles();
  const [selectedComponent, setSelectedComponent] = useState('Dashboard');

  const handleComponentChange = (componentName) => {
    setSelectedComponent(componentName);
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Reference':
        return <Reference />;
      case 'MSS':
        return <MSS />;
      case 'MDO':
        return <MDO />;
      default:
        return null;
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <Drawer variant="permanent" classes={{ paper: classes.sidebar }}>
        <div>
          <Link to="/Landing" className={classes.backLink}>
            <LeftOutlined />
          </Link>
        </div>
        <List style={{ paddingTop :'150px'}}>
          <ListItem button key="Dashboard" onClick={() => handleComponentChange('Dashboard')} className={classes.listItem}>
            <ListItemIcon className={classes.listItemIcon}><DashboardIcon /></ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button key="Reference" onClick={() => handleComponentChange('Reference')} className={classes.listItem}>
            <ListItemIcon className={classes.listItemIcon}><ReferenceIcon /></ListItemIcon>
            <ListItemText primary="Reference" />
          </ListItem>
          <ListItem button key="MSS" onClick={() => handleComponentChange('MSS')} className={classes.listItem}>
            <ListItemIcon className={classes.listItemIcon}><MSSIcon /></ListItemIcon>
            <ListItemText primary="MSS" />
          </ListItem>
          <ListItem button key="MDO" onClick={() => handleComponentChange('MDO')} className={classes.listItem}>
            <ListItemIcon className={classes.listItemIcon}><MDOIcon /></ListItemIcon>
            <ListItemText primary="MDO" />
          </ListItem>
        </List>
      </Drawer>
      <div className={classes.mainContent}>
        {renderComponent()}
      </div>
    </div>
  );
};

export default Alert;
