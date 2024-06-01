import { Box, Button, Grid, Paper, Tab, Tabs, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

function Reference() {
  const [tab, setTab] = useState(0);
  const [mssData, setMssData] = useState({
    Rougeole: '',
    Coqueluche: '',
    Tetanos: '',
    Meningite_a_meningocoque: '',
    Typhoide: '',
    Trachome: '',
    Diphterie: '',
    Bilharziose: '',
    Tuberculose: '',
    Lepre: '',
    Urethrites: '',
    Syphilis: '',
    Rage: '',
    Toxi_infections_alimentaires_collectives: '',
    Paludisme_importe: '',
    Syndrome_grippal_17_18: ''
  });
  const [mdoData, setMdoData] = useState({
    RAA: '',
    Charbon_humain: '',
    Hepatite_virale: '',
    Brucellose: '',
    Leptospirose: '',
    Leishmanioses: '',
    Gastro_Enterites_aigues: '',
    Conjonctivite_Nouveau_Ne: '',
    Hydatidose: '',
    Leishmaniose_viscerale: ''
  });

  useEffect(() => {
    // Fetch MSSRef data from the server
    const fetchMssData = async () => {
      try {
        const response = await fetch('http://localhost:5000/mssref');
        const data = await response.json();
        console.log('Fetched MSS Data:', data); // Debug log
        if (data) {
          setMssData(data); // Assuming data is an object
        }
      } catch (error) {
        console.error('Error fetching MSS data:', error);
      }
    };

    // Fetch MDORef data from the server
    const fetchMdoData = async () => {
      try {
        const response = await fetch('http://localhost:5000/mdoref');
        const data = await response.json();
        console.log('Fetched MDO Data:', data); // Debug log
        if (data) {
          setMdoData(data); // Assuming data is an object
        }
      } catch (error) {
        console.error('Error fetching MDO data:', error);
      }
    };

    fetchMssData();
    fetchMdoData();
  }, []);

  useEffect(() => {
    console.log('MSS Data State:', mssData);
  }, [mssData]);

  useEffect(() => {
    console.log('MDO Data State:', mdoData);
  }, [mdoData]);

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  const handleMssChange = (event) => {
    setMssData({ ...mssData, [event.target.name]: event.target.value });
  };

  const handleMdoChange = (event) => {
    setMdoData({ ...mdoData, [event.target.name]: event.target.value });
  };

  const handleMssSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/mssref`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mssData),
      });

      if (response.ok) {
        alert('MSS record updated successfully');
      } else {
        const errorText = await response.text();
        console.error('Failed to update MSS record:', errorText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleMdoSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/mdoref`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mdoData),
      });

      if (response.ok) {
        alert('MDO record updated successfully');
      } else {
        const errorText = await response.text();
        console.error('Failed to update MDO record:', errorText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Box style={{ backgroundColor: '#1a237e', borderRadius: '10px', padding: '20px', width: '100%', maxWidth: '800px', color: 'white', margin: '0 auto' }}>
      <Paper style={{ padding: '20px', borderRadius: '10px', backgroundColor: '#3f51b5', color: 'white' }}>
        <Tabs value={tab} onChange={handleTabChange}>
          <Tab label="MSS" />
          <Tab label="MDO" />
        </Tabs>
        {tab === 0 && (
          <form onSubmit={handleMssSubmit}>
            <Grid container spacing={2}>
              {Object.keys(mssData).map((key) => (
                <Grid item xs={12} sm={6} key={key}>
                  <TextField
                    fullWidth
                    label={key.replace(/_/g, ' ')}
                    name={key}
                    value={mssData[key]}
                    onChange={handleMssChange}
                    InputLabelProps={{
                      style: { color: 'white' },
                    }}
                    InputProps={{
                      style: { color: 'white' },
                    }}
                  />
                </Grid>
              ))}
              <Grid item xs={12} style={{ textAlign: 'right' }}>
                <Button variant="contained" color="secondary" type="button" onClick={() => setMssData({
                  Rougeole: '',
                  Coqueluche: '',
                  Tetanos: '',
                  Meningite_a_meningocoque: '',
                  Typhoide: '',
                  Trachome: '',
                  Diphterie: '',
                  Bilharziose: '',
                  Tuberculose: '',
                  Lepre: '',
                  Urethrites: '',
                  Syphilis: '',
                  Rage: '',
                  Toxi_infections_alimentaires_collectives: '',
                  Paludisme_importe: '',
                  Syndrome_grippal_17_18: ''
                })} style={{ marginRight: '10px' }}>
                  Effacer
                </Button>
                <Button variant="contained" color="primary" type="submit">
                  Envoyer MSS
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
        {tab === 1 && (
          <form onSubmit={handleMdoSubmit}>
            <Grid container spacing={2}>
              {Object.keys(mdoData).map((key) => (
                <Grid item xs={12} sm={6} key={key}>
                  <TextField
                    fullWidth
                    label={key.replace(/_/g, ' ')}
                    name={key}
                    value={mdoData[key]}
                    onChange={handleMdoChange}
                    InputLabelProps={{
                      style: { color: 'white' },
                    }}
                    InputProps={{
                      style: { color: 'white' },
                    }}
                  />
                </Grid>
              ))}
              <Grid item xs={12} style={{ textAlign: 'right' }}>
                <Button variant="contained" color="secondary" type="button" onClick={() => setMdoData({
                  RAA: '',
                  Charbon_humain: '',
                  Hepatite_virale: '',
                  Brucellose: '',
                  Leptospirose: '',
                  Leishmanioses: '',
                  Gastro_Enterites_aigues: '',
                  Conjonctivite_Nouveau_Ne: '',
                  Hydatidose: '',
                  Leishmaniose_viscerale: ''
                })} style={{ marginRight: '10px' }}>
                  Effacer
                </Button>
                <Button variant="contained" color="primary" type="submit">
                  Envoyer MDO
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Paper>
    </Box>
  );
}

export default Reference;
