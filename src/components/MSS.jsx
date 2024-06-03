import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import RefreshIcon from '@material-ui/icons/Refresh';
import React, { useEffect, useRef, useState } from 'react';
import Updatemss from './Updatemss';

const useStyles = makeStyles({
  container: {
    backgroundColor: '#1a237e',
    padding: '20px',
    color: 'white',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '10px',
    color: 'white',
    fontSize: '20px',
    fontWeight: 'bold',
  },
  filter: {
    backgroundColor: 'white',
    borderRadius: '5px',
  },
  table: {
    overflowX: 'auto',
    maxHeight: '80vh', // Adjusted to ensure the table has a scrollable area
    position: 'relative',
  },
  headerRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(18, 1fr)',
    gap: '10px',
    color: 'white',
    marginBottom: '10px',
    position: 'sticky',
    top: 0,
    backgroundColor: '#1a237e',
    zIndex: 1,
    padding: '10px',
  },
  cell: {
    textAlign: 'center',
    padding: '5px',
    wordWrap: 'break-word',
  },
  card: {
    marginBottom: '10px',
    display: 'grid',
    gridTemplateColumns: 'repeat(18, 1fr)',
    gap: '10px',
    alignItems: 'center',
    color: 'white',
    padding: '10px',
  },
  cardHovered: {
    backgroundColor: '#3949ab',
  },
  cardDefault: {
    backgroundColor: '#3f51b5',
  },
  button: {
    color: 'white',
  },
});

function MSS() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [provinceFilter, setProvinceFilter] = useState('');
  const [hoverIndex, setHoverIndex] = useState(null);
  const updateFormRef = useRef(null);

  
  const [rowData, setRowData] = useState(null);
  const [showUpdateMdo, setShowUpdateMdo] = useState(false);

  const fetchData = () => {
    fetch('http://localhost:5000/mss')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setFilteredData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

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

  
  const handleCloseUpdateMdo = () => {
    setShowUpdateMdo(false);
  };

  const handleUpdate = (row) => {
    setRowData(row);
    setShowUpdateMdo(true);
  };

  const handleFilterChange = (e) => {
    setProvinceFilter(e.target.value);
  };

  useEffect(() => {
    const filtered = data.filter(item =>
      item.nom_objet.toLowerCase().includes(provinceFilter.toLowerCase())
    );
    setFilteredData(filtered);
  }, [provinceFilter, data]);

  const headers = [
    'Province', 'Rougeole', 'Coqueluche', 'Tetanos', 'Men. Men.', 'Typhoide', 'Trachome',
    'Diphterie', 'Bilharz.', 'Tuberc.', 'Lepre', 'Urethrites', 'Syphilis', 'Rage',
    'Toxi Inf.', 'Palud. Imp.', 'Syn. Grippal', 'Update'
  ];

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div>MSS</div>
        <TextField 
          label="Filter by Province"
          variant="outlined"
          size="small"
          value={provinceFilter}
          onChange={handleFilterChange}
          className={classes.filter}
        />
      </div>
      <div className={classes.table}>
        <div className={classes.headerRow}>
          {headers.map((header, index) => (
            <div key={index} className={classes.cell}>{header}</div>
          ))}
        </div>
        {filteredData.map((row, index) => (
          <Card 
            key={index} 
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            className={`${classes.card} ${hoverIndex === index ? classes.cardHovered : classes.cardDefault}`}
          >
            <CardContent className={classes.cell}>{row.nom_objet || 'N/A'}</CardContent>
            <CardContent className={classes.cell}>{row.Rougeole || 0}</CardContent>
            <CardContent className={classes.cell}>{row.Coqueluche || 0}</CardContent>
            <CardContent className={classes.cell}>{row.Tetanos || 0}</CardContent>
            <CardContent className={classes.cell}>{row.Meningite_a_meningocoque || 0}</CardContent>
            <CardContent className={classes.cell}>{row.Typhoide || 0}</CardContent>
            <CardContent className={classes.cell}>{row.Trachome || 0}</CardContent>
            <CardContent className={classes.cell}>{row.Diphterie || 0}</CardContent>
            <CardContent className={classes.cell}>{row.Bilharziose || 0}</CardContent>
            <CardContent className={classes.cell}>{row.Tuberculose || 0}</CardContent>
            <CardContent className={classes.cell}>{row.Lepre || 0}</CardContent>
            <CardContent className={classes.cell}>{row.Urethrites || 0}</CardContent>
            <CardContent className={classes.cell}>{row.Syphilis || 0}</CardContent>
            <CardContent className={classes.cell}>{row.Rage || 0}</CardContent>
            <CardContent className={classes.cell}>{row.Toxi_infections_alimentaires_collectives || 0}</CardContent>
            <CardContent className={classes.cell}>{row.Paludisme_importe || 0}</CardContent>
            <CardContent className={classes.cell}>{row.Syndrome_grippal_17_18 || 0}</CardContent>
            <CardContent className={classes.cell}>
              <IconButton
                onClick={() => handleUpdate(row)}
                className={classes.button}
              >
                <RefreshIcon />
              </IconButton>
            </CardContent>
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
          <Updatemss rowData={rowData} onUpdate={handleUpdate} onClose={handleCloseUpdateMdo} />
        </div>
      )}
      </div>
    </div>
  );
}

export default MSS;
