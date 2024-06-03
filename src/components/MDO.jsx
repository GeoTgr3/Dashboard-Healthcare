import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import UpdateIcon from '@material-ui/icons/Update';
import React, { useEffect, useRef, useState } from 'react';
import Updatemdo from './Updatemdo';

function MDO() {
  const [data, setData] = useState([]);
  const [hoverIndex, setHoverIndex] = useState(null);
  const updateFormRef = useRef(null);

  const [rowData, setRowData] = useState(null);
  const [showUpdateMdo, setShowUpdateMdo] = useState(false);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/mdo')
      .then(response => response.json())
      .then(data => {
        setData(data);
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleUpdate = (row) => {
    setRowData(row);
    setShowUpdateMdo(true);
  };

  const handleCloseUpdateMdo = () => {
    setShowUpdateMdo(false);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredData = data.filter(row => 
    row.nom_objet.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(event) {
      if (updateFormRef.current && !updateFormRef.current.contains(event.target)) {
        setShowUpdateMdo(false);
      }
    }

    if (showUpdateMdo) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showUpdateMdo]);

  return (
    <div style={{ backgroundColor: '#1a237e', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '10px' }}>
        <div style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>MDO</div>
        <TextField 
          label="Filter by Province"
          variant="outlined"
          size="small"
          value={filter}
          onChange={handleFilterChange}
          style={{ backgroundColor: 'white', borderRadius: '5px' }}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', color: 'white', marginBottom: '10px' , position:'sticky' , zIndex : 1 , top : 0 , backgroundColor: '#1a237e'}}>
      <div style={{ flex: '1', padding: '0 10px', whiteSpace: 'normal', width: '80px' }}>Province</div>
        <div style={{ flex: '1', padding: '0 7px', whiteSpace: 'normal', width: '80px' }}>RAA</div>
        <div style={{ flex: '1', padding: '0 7px', whiteSpace: 'normal', width: '80px' }}>Charbon<br />humain</div>
        <div style={{ flex: '1', padding: '0 7px', whiteSpace: 'normal', width: '80px' }}>Hepatite<br />virale</div>
        <div style={{ flex: '1', padding: '0 7px', whiteSpace: 'normal', width: '80px' }}>Brucellose</div>
        <div style={{ flex: '1', padding: '0 7px', whiteSpace: 'normal', width: '80px' }}>Lepto-<br />spirose</div>
        <div style={{ flex: '1', padding: '0 7px', whiteSpace: 'normal', width: '80px' }}>Leishm-<br />anioses</div>
        <div style={{ flex: '1', padding: '0 7px', whiteSpace: 'normal', width: '80px' }}>Gastro-<br />Enterites<br />aigues</div>
        <div style={{ flex: '1', padding: '0 7px', whiteSpace: 'normal', width: '80px' }}><br />Conjonctivite<br />Nouveau-Ne</div>
        <div style={{ flex: '1', padding: '0 7px', whiteSpace: 'normal', width: '80px' }}>Hydatidose</div>
        <div style={{ flex: '1', padding: '0 7px', whiteSpace: 'normal', width: '80px' }}>Leish-<br />maniose<br />viscerale</div>
        <div style={{ flex: '1', padding: '0 7px', whiteSpace: 'normal', width: '80px' }}>Update</div>

      </div>
      {filteredData.map((row, index) => (
        <Card 
          key={index} 
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
          style={{ 
            marginBottom: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: hoverIndex === index ? '#3949ab' : '#3f51b5',
            color: 'white',
            padding: '10px',
          }}
        >
          <CardContent style={{ flex: '1' }}>{row.nom_objet}</CardContent>
          <CardContent style={{ flex: '1' }}>{row.RAA}</CardContent>
          <CardContent style={{ flex: '1' }}>{row.Charbon_humain}</CardContent>
          <CardContent style={{ flex: '1' }}>{row.Hepatite_virale}</CardContent>
          <CardContent style={{ flex: '1' }}>{row.Brucellose}</CardContent>
          <CardContent style={{ flex: '1' }}>{row.Leptospirose}</CardContent>
          <CardContent style={{ flex: '1' }}>{row.Leishmanioses}</CardContent>
          <CardContent style={{ flex: '1' }}>{row.Gastro_Enterites_aigues}</CardContent>
          <CardContent style={{ flex: '1' }}>{row.Conjonctivite_Nouveau_Ne}</CardContent>
          <CardContent style={{ flex: '1' }}>{row.Hydatidose}</CardContent>
          <CardContent style={{ flex: '1' }}>{row.Leishmaniose_viscerale}</CardContent>
          <Button 
            variant="contained"
            color="primary"
            onClick={() => handleUpdate(row)}
          >
            <UpdateIcon />
          </Button>
        </Card>
      ))}
      {showUpdateMdo && (
        <div
          ref={updateFormRef}
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#001529',
            padding: '20px',
            zIndex: 9999
          }}
        >
          <Updatemdo rowData={rowData} onUpdate={handleUpdate} onClose={handleCloseUpdateMdo} />
        </div>
      )}
    </div>
  );
}

export default MDO;
