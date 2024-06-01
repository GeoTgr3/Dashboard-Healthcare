import { Box, Button, Grid, Paper, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

function Updatemdo({ rowData, onUpdate, onClose }) {
  const [updatedData, setUpdatedData] = useState({
    Code: '',
    nom_objet: '',
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
    if (rowData) {
      setUpdatedData({
        Code: rowData.Code ?? '',
        nom_objet: rowData.nom_objet ?? '',
        RAA: rowData.RAA ?? '',
        Charbon_humain: rowData.Charbon_humain ?? '',
        Hepatite_virale: rowData.Hepatite_virale ?? '',
        Brucellose: rowData.Brucellose ?? '',
        Leptospirose: rowData.Leptospirose ?? '',
        Leishmanioses: rowData.Leishmanioses ?? '',
        Gastro_Enterites_aigues: rowData.Gastro_Enterites_aigues ?? '',
        Conjonctivite_Nouveau_Ne: rowData.Conjonctivite_Nouveau_Ne ?? '',
        Hydatidose: rowData.Hydatidose ?? '',
        Leishmaniose_viscerale: rowData.Leishmaniose_viscerale ?? ''
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
      const response = await fetch(`http://localhost:5000/mdo/${updatedData.Code}`, {
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

export default Updatemdo;
