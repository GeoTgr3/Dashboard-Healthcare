import { Box, Button, Grid, Paper, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

function Updatemss({ rowData, onUpdate, onClose }) {
  const [updatedData, setUpdatedData] = useState({
    Code: '',
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

  useEffect(() => {
    if (rowData) {
      setUpdatedData({
        Code: rowData.Code ?? '',
        Rougeole: rowData.Rougeole ?? '',
        Coqueluche: rowData.Coqueluche ?? '',
        Tetanos: rowData.Tetanos ?? '',
        Meningite_a_meningocoque: rowData.Meningite_a_meningocoque ?? '',
        Typhoide: rowData.Typhoide ?? '',
        Trachome: rowData.Trachome ?? '',
        Diphterie: rowData.Diphterie ?? '',
        Bilharziose: rowData.Bilharziose ?? '',
        Tuberculose: rowData.Tuberculose ?? '',
        Lepre: rowData.Lepre ?? '',
        Urethrites: rowData.Urethrites ?? '',
        Syphilis: rowData.Syphilis ?? '',
        Rage: rowData.Rage ?? '',
        Toxi_infections_alimentaires_collectives: rowData.Toxi_infections_alimentaires_collectives ?? '',
        Paludisme_importe: rowData.Paludisme_importe ?? '',
        Syndrome_grippal_17_18: rowData.Syndrome_grippal_17_18 ?? ''
      });
    }
  }, [rowData]);

  const handleChange = (event) => {
    setUpdatedData({
      ...updatedData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!updatedData.Code) {
      console.error('Code is missing');
      return;
    }
    try {
      const response = await fetch(`http://localhost:5000/mss/${updatedData.Code}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        onUpdate(updatedData);
        onClose();
      } else {
        const errorText = await response.text();
        console.error('Failed to update record:', errorText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Box style={{ backgroundColor: '#1a237e', borderRadius: '10px', padding: '20px', width: '100%', maxWidth: '800px', color: 'white', margin: '0 auto' }}>
      <Paper style={{ padding: '20px', borderRadius: '10px', backgroundColor: '#3f51b5', color: 'white' }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {Object.keys(updatedData).map((key) => (
              key !== 'Code' && (
                <Grid item xs={12} sm={6} key={key}>
                  <TextField
                    fullWidth
                    label={key.replace(/_/g, ' ')}
                    name={key}
                    value={updatedData[key]}
                    onChange={handleChange}
                    InputLabelProps={{
                      style: { color: 'white' },
                    }}
                    InputProps={{
                      style: { color: 'white' },
                    }}
                  />
                </Grid>
              )
            ))}
            <Grid item xs={12} style={{ textAlign: 'right' }}>
              <Button variant="contained" color="secondary" onClick={onClose} style={{ marginRight: '10px' }}>
                Cancel
              </Button>
              <Button variant="contained" color="primary" type="submit">
                Update
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
}

export default Updatemss;
