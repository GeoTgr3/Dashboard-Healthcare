import { Box, Card, CardContent, Tab, Tabs, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import React, { useEffect, useState } from 'react';

const useStyles = makeStyles({
  container: {
    backgroundColor: '#001529',
    padding: '20px',
    color: 'white',
    minHeight: '100vh',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '20px',
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  alertContainer: {
    marginTop: '20px',
  },
  card: {
    backgroundColor: '#f44336',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    borderRadius: '8px',
  },
  icon: {
    marginRight: '10px',
  },
  alertText: {
    fontSize: '16px',
  },
  provinceName: {
    color: '#ffeb3b', // Change to desired color
    fontWeight: 'bold',
  },
  section: {
    marginTop: '20px',
  },
  sectionHeader: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  tabContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  alertsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  alertItem: {
    margin: '5px',
    flex: '1 1 calc(33% - 10px)', // 3 items per row with some margin
  },
});

function Dashboard() {
  const classes = useStyles();
  const [mssData, setMssData] = useState([]);
  const [mdoData, setMdoData] = useState([]);
  const [mssRef, setMssRef] = useState({});
  const [mdoRef, setMdoRef] = useState({});
  const [mssAlerts, setMssAlerts] = useState([]);
  const [mdoAlerts, setMdoAlerts] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    const fetchMssData = async () => {
      try {
        const response = await fetch('http://localhost:5000/mss');
        const data = await response.json();
        setMssData(data);
      } catch (error) {
        console.error('Error fetching MSS data:', error);
      }
    };

    const fetchMdoData = async () => {
      try {
        const response = await fetch('http://localhost:5000/mdo');
        const data = await response.json();
        setMdoData(data);
      } catch (error) {
        console.error('Error fetching MDO data:', error);
      }
    };

    const fetchMssRef = async () => {
      try {
        const response = await fetch('http://localhost:5000/mssref');
        const data = await response.json();
        setMssRef(data);
      } catch (error) {
        console.error('Error fetching MSS reference data:', error);
      }
    };

    const fetchMdoRef = async () => {
      try {
        const response = await fetch('http://localhost:5000/mdoref');
        const data = await response.json();
        setMdoRef(data);
      } catch (error) {
        console.error('Error fetching MDO reference data:', error);
      }
    };

    fetchMssData();
    fetchMdoData();
    fetchMssRef();
    fetchMdoRef();
  }, []);

  useEffect(() => {
    const checkAlerts = () => {
      const newMssAlerts = [];
      const newMdoAlerts = [];

      mssData.forEach(row => {
        Object.keys(mssRef).forEach(key => {
          if (row[key] > mssRef[key]) {
            newMssAlerts.push({key, province: row.nom_objet, alert: `Alert! ${key} in ${row.nom_objet} exceeds the reference value.`});
          }
        });
      });

      mdoData.forEach(row => {
        Object.keys(mdoRef).forEach(key => {
          if (row[key] > mdoRef[key]) {
            newMdoAlerts.push({key, province: row.nom_objet, alert: `Alert! ${key} in ${row.nom_objet} exceeds the reference value.`});
          }
        });
      });

      setMssAlerts(newMssAlerts);
      setMdoAlerts(newMdoAlerts);
    };

    checkAlerts();
  }, [mssData, mdoData, mssRef, mdoRef]);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const renderAlerts = (alerts) => (
    <div className={classes.alertsContainer}>
      {alerts.map((alertObj, index) => (
        <div key={index} className={classes.alertItem}>
          <Card className={classes.card}>
            <ErrorOutlineIcon className={classes.icon} />
            <CardContent>
              <Typography variant="body1" className={classes.alertText}>
                Alert! {alertObj.key} in <span className={classes.provinceName}>{alertObj.province}</span> exceeds the reference value.
              </Typography>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );

  return (
    <div className={classes.container}>
      {/* <div className={classes.header}>
        Dashboard
      </div> */}

      <Tabs value={tabIndex} onChange={handleTabChange} indicatorColor="primary" textColor="white" centered>
        <Tab label="MSS" />
        <Tab label="MDO" />
      </Tabs>

      <Box className={classes.section}>
        {tabIndex === 0 && (
          <div className={classes.tabContent}>
            <div className={classes.alertsContainer}>
              <Typography className={classes.sectionHeader}>MSS Alerts</Typography>
              {renderAlerts(mssAlerts)}
            </div>
          </div>
        )}
        {tabIndex === 1 && (
          <div className={classes.tabContent}>
            <div className={classes.alertsContainer}>
              <Typography className={classes.sectionHeader} style={{marginRight:'800px'}}>MDO Alerts</Typography>
              {renderAlerts(mdoAlerts)}
            </div>
          </div>
        )}
      </Box>
    </div>
  );
}

export default Dashboard;
