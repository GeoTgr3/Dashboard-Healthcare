import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import React, { useEffect, useState } from 'react';

function MSS() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/mss')
      .then(response => response.json())
      .then(data => {
        setData(data);
        console.log(data); // Check if data is fetched correctly
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to fetch data only once when the component mounts

  console.log("Rendering with data:", data); // Check if component re-renders with data

  return (
    <div style={{ backgroundColor: '#1a237e', padding: '20px' }}>
      {data.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <table style={{ borderCollapse: 'collapse', margin: '0 auto', backgroundColor: '#1a237e' }}>
          <thead style={{ position: 'sticky', top: 0, zIndex: 1 }}>
            <tr>
              <th colSpan="23" style={{ backgroundColor: '#333', color: 'white', padding: '10px' }}>MSS</th>
            </tr>
            <tr style={{ backgroundColor: '#ddd' }}>
      <th style={{ fontSize: 'small', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', borderRight: '2px solid white' }}>Province</th>
      <th style={{ fontSize: 'small', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', borderRight: '2px solid white' }}>Rougeole</th>
      <th style={{ fontSize: 'small', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', borderRight: '2px solid white' }}>Coqueluche</th>
      <th style={{ fontSize: 'small', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', borderRight: '2px solid white' }}>Tetanos</th>
      <th style={{ fontSize: 'small', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', borderRight: '2px solid white' }}>Meningite a meningocoque</th>
      <th style={{ fontSize: 'small', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', borderRight: '2px solid white' }}>Typhoide</th>
      <th style={{ fontSize: 'small', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', borderRight: '2px solid white' }}>Trachome</th>
      <th style={{ fontSize: 'small', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', borderRight: '2px solid white' }}>Diphterie</th>
      <th style={{ fontSize: 'small', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', borderRight: '2px solid white' }}>Bilharziose</th>
      <th style={{ fontSize: 'small', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', borderRight: '2px solid white' }}>Tuberculose</th>
      <th style={{ fontSize: 'small', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', borderRight: '2px solid white' }}>Lepre</th>
      <th style={{ fontSize: 'small', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', borderRight: '2px solid white' }}>Urethrites</th>
      <th style={{ fontSize: 'small', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', borderRight: '2px solid white' }}>Syphilis</th>
      <th style={{ fontSize: 'small', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', borderRight: '2px solid white' }}>Rage</th>
      <th style={{ fontSize: 'small', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', borderRight: '2px solid white' }}>Toxi_infections_alimentaires_collectives</th>
      <th style={{ fontSize: 'small', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', borderRight: '2px solid white' }}>Paludisme_importe</th>
      <th style={{ fontSize: 'small', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Syndrome_grippal_17_18</th>
    </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td style={{ width: '10vw', height: '10vw', padding: 0 }}>
                  <Card 
                    style={{ 
                      margin: '5px', 
                      backgroundColor: 'gray', 
                      transition: 'background-color 0.3s',
                      '&:hover': {
                        backgroundColor: '#00008b' // Dark blue color on hover
                      }
                    }}
                  >
                    <CardContent style={{ textAlign: 'center' }}>{row.nom_objet}</CardContent>
                  </Card>
                </td>
                {/* Add similar td elements for other columns with corresponding row data */}
                <td style={{ width: '10vw', height: '10vw', padding: 0 }}>
                  <Card 
                    style={{ 
                      margin: '5px', 
                      backgroundColor: 'gray', 
                      transition: 'background-color 0.3s',
                      '&:hover': {
                        backgroundColor: '#00008b' // Dark blue color on hover
                      }
                    }}
                  >
                    <CardContent style={{ textAlign: 'center' }}>{row.Rougeole}</CardContent>
                  </Card>
                </td>
                {/* Add similar td elements for other columns with corresponding row data */}
                <td style={{ width: '10vw', height: '10vw', padding: 0 }}>
                  <Card 
                    style={{ 
                      margin: '5px', 
                      backgroundColor: 'gray', 
                      transition: 'background-color 0.3s',
                      '&:hover': {
                        backgroundColor: '#00008b' // Dark blue color on hover
                      }
                    }}
                  >
                    <CardContent style={{ textAlign: 'center' }}>{row.Coqueluche}</CardContent>
                  </Card>
                </td>
                {/* Add similar td elements for other columns with corresponding row data */}
                <td style={{ width: '10vw', height: '10vw', padding: 0 }}>
                  <Card 
                    style={{ 
                      margin: '5px', 
                      backgroundColor: 'gray', 
                      transition: 'background-color 0.3s',
                      '&:hover': {
                        backgroundColor: '#00008b' // Dark blue color on hover
                      }
                    }}
                  >
                    <CardContent style={{ textAlign: 'center' }}>{row.Tetanos}</CardContent>
                  </Card>
                </td>
                {/* Add similar td elements for other columns with corresponding row data */}
                <td style={{ width: '10vw', height: '10vw', padding: 0 }}>
                  <Card 
                    style={{ 
                      margin: '5px', 
                      backgroundColor: 'gray', 
                      transition: 'background-color 0.3s',
                      '&:hover': {
                        backgroundColor: '#00008b' // Dark blue color on hover
                      }
                    }}
                  >
                    <CardContent style={{ textAlign: 'center' }}>{row.Meningite_a_meningocoque}</CardContent>
                  </Card>
                </td>
                {/* Add similar td elements for other columns with corresponding row data */}
                <td style={{ width: '10vw', height: '10vw', padding: 0 }}>
                  <Card 
                    style={{ 
                      margin: '5px', 
                      backgroundColor: 'gray', 
                      transition: 'background-color 0.3s',
                      '&:hover': {
                        backgroundColor: '#00008b' // Dark blue color on hover
                      }
                    }}
                  >
                    <CardContent style={{ textAlign: 'center' }}>{row.Typhoide}</CardContent>
                  </Card>
                </td>
                {/* Add similar td elements for other columns with corresponding row data */}
                <td style={{ width: '10vw', height: '10vw', padding: 0 }}>
                  <Card 
                    style={{ 
                      margin: '5px', 
                      backgroundColor: 'gray', 
                      transition: 'background-color 0.3s',
                      '&:hover': {
                        backgroundColor: '#00008b' // Dark blue color on hover
                      }
                    }}
                  >
                    <CardContent style={{ textAlign: 'center' }}>{row.Trachome}</CardContent>
                  </Card>
                </td>
                {/* Add similar td elements for other columns with corresponding row data */}
                <td style={{ width: '10vw', height: '10vw', padding: 0 }}>
                  <Card 
                    style={{ 
                      margin: '5px', 
                      backgroundColor: 'gray', 
                      transition: 'background-color 0.3s',
                      '&:hover': {
                        backgroundColor: '#00008b' // Dark blue color on hover
                      }
                    }}
                  >
                    <CardContent style={{ textAlign: 'center' }}>{row.Diphterie}</CardContent>
                  </Card>
                </td>
                {/* Add similar td elements for other columns with corresponding row data */}
                <td style={{ width: '10vw', height: '10vw', padding: 0 }}>
                  <Card 
                    style={{ 
                      margin: '5px', 
                      backgroundColor: 'gray', 
                      transition: 'background-color 0.3s',
                      '&:hover': {
                        backgroundColor: '#00008b' // Dark blue color on hover
                      }
                    }}
                  >
                    <CardContent style={{ textAlign: 'center' }}>{row.Bilharziose}</CardContent>
                  </Card>
                </td>
                {/* Add similar td elements for other columns with corresponding row data */}
                <td style={{ width: '10vw', height: '10vw', padding: 0 }}>
                  <Card 
                    style={{ 
                      margin: '5px', 
                      backgroundColor: 'gray', 
                      transition: 'background-color 0.3s',
                      '&:hover': {
                        backgroundColor: '#00008b' // Dark blue color on hover
                      }
                    }}
                  >
                    <CardContent style={{ textAlign: 'center' }}>{row.Tuberculose}</CardContent>
                  </Card>
                </td>
                {/* Add similar td elements for other columns with corresponding row data */}
                <td style={{ width: '10vw', height: '10vw', padding: 0 }}>
                  <Card 
                    style={{ 
                      margin: '5px', 
                      backgroundColor: 'gray', 
                      transition: 'background-color 0.3s',
                      '&:hover': {
                        backgroundColor: '#00008b' // Dark blue color on hover
                      }
                    }}
                  >
                    <CardContent style={{ textAlign: 'center' }}>{row.Lepre}</CardContent>
                  </Card>
                </td>
                {/* Add similar td elements for other columns with corresponding row data */}
                <td style={{ width: '10vw', height: '10vw', padding: 0 }}>
                  <Card 
                    style={{ 
                      margin: '5px', 
                      backgroundColor: 'gray', 
                      transition: 'background-color 0.3s',
                      '&:hover': {
                        backgroundColor: '#00008b' // Dark blue color on hover
                      }
                    }}
                  >
                    <CardContent style={{ textAlign: 'center' }}>{row.Urethrites}</CardContent>
                  </Card>
                </td>
                {/* Add similar td elements for other columns with corresponding row data */}
                <td style={{ width: '10vw', height: '10vw', padding: 0 }}>
                  <Card 
                    style={{ 
                      margin: '5px', 
                      backgroundColor: 'gray', 
                      transition: 'background-color 0.3s',
                      '&:hover': {
                        backgroundColor: '#00008b' // Dark blue color on hover
                      }
                    }}
                  >
                    <CardContent style={{ textAlign: 'center' }}>{row.Syphilis}</CardContent>
                  </Card>
                </td>
                {/* Add similar td elements for other columns with corresponding row data */}
                <td style={{ width: '10vw', height: '10vw', padding: 0 }}>
                  <Card 
                    style={{ 
                      margin: '5px', 
                      backgroundColor: 'gray', 
                      transition: 'background-color 0.3s',
                      '&:hover': {
                        backgroundColor: '#00008b' // Dark blue color on hover
                      }
                    }}
                  >
                    <CardContent style={{ textAlign: 'center' }}>{row.Rage}</CardContent>
                  </Card>
                </td>
                {/* Add similar td elements for other columns with corresponding row data */}
                <td style={{ width: '10vw', height: '10vw', padding: 0 }}>
                  <Card 
                    style={{ 
                      margin: '5px', 
                      backgroundColor: 'gray', 
                      transition: 'background-color 0.3s',
                      '&:hover': {
                        backgroundColor: '#00008b' // Dark blue color on hover
                      }
                    }}
                  >
                    <CardContent style={{ textAlign: 'center' }}>{row.Toxi_infections_alimentaires_collectives}</CardContent>
                  </Card>
                </td>
                {/* Add similar td elements for other columns with corresponding row data */}
                <td style={{ width: '10vw', height: '10vw', padding: 0 }}>
                  <Card 
                    style={{ 
                      margin: '5px', 
                      backgroundColor: 'gray', 
                      transition: 'background-color 0.3s',
                      '&:hover': {
                        backgroundColor: '#00008b' // Dark blue color on hover
                      }
                    }}
                  >
                    <CardContent style={{ textAlign: 'center' }}>{row.Paludisme_importe}</CardContent>
                  </Card>
                </td>
                {/* Add similar td elements for other columns with corresponding row data */}
                <td style={{ width: '10vw', height: '10vw', padding: 0 }}>
                  <Card 
                    style={{ 
                      margin: '5px', 
                      backgroundColor: 'gray', 
                      transition: 'background-color 0.3s',
                      '&:hover': {
                        backgroundColor: '#00008b' // Dark blue color on hover
                      }
                    }}
                  >
                    <CardContent style={{ textAlign: 'center' }}>{row.Syndrome_grippal_17_18}</CardContent>
                  </Card>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default MSS;
