import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import React, { useEffect, useState } from 'react';

function MDO() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/mdo')
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
              <th colSpan="11" style={{ backgroundColor: '#333', color: 'white', padding: '10px' }}>MDO</th>
            </tr>
            <tr style={{ backgroundColor: '#ddd' }}>
  <th style={{ fontSize: 'small' }}>Province</th>
  <th style={{ fontSize: 'small' }}>RAA</th>
  <th style={{ fontSize: 'small' }}>Charbon humain</th>
  <th style={{ fontSize: 'small' }}>Hepatite virale</th>
  <th style={{ fontSize: 'small' }}>Brucellose</th>
  <th style={{ fontSize: 'small' }}>Leptospirose</th>
  <th style={{ fontSize: 'small' }}>Leishmanioses</th>
  <th style={{ fontSize: 'small' }}>Gastro-Enterites aigues</th>
  <th style={{ fontSize: 'small' }}>Conjonctivite Nouveau-Ne</th>
  <th style={{ fontSize: 'small' }}>Hydatidose</th>
  <th style={{ fontSize: 'small' }}>Leishmaniose viscerale</th>
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
                    <CardContent style={{ textAlign: 'center' }}>{row.RAA}</CardContent>
                  </Card>
                </td>
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
                    <CardContent style={{ textAlign: 'center' }}>{row.Charbon_humain}</CardContent>
                  </Card>
                </td>
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
                    <CardContent style={{ textAlign: 'center' }}>{row.Hepatite_virale}</CardContent>
                  </Card>
                </td>
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
                    <CardContent style={{ textAlign: 'center' }}>{row.Brucellose}</CardContent>
                  </Card>
                </td>
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
                    <CardContent style={{ textAlign: 'center' }}>{row.Leptospirose}</CardContent>
                  </Card>
                </td>
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
                    <CardContent style={{ textAlign: 'center' }}>{row.Leishmanioses}</CardContent>
                  </Card>
                </td>
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
                    <CardContent style={{ textAlign: 'center' }}>{row.Gastro_Enterites_aigues}</CardContent>
                  </Card>
                </td>
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
                    <CardContent style={{ textAlign: 'center' }}>{row.Conjonctivite_Nouveau_Ne}</CardContent>
                  </Card>
                </td>
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
                    <CardContent style={{ textAlign: 'center' }}>{row.Hydatidose}</CardContent>
                  </Card>
                </td>
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
                    <CardContent style={{ textAlign: 'center' }}>{row.Leishmaniose_viscerale}</CardContent>
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

export default MDO;
