import cors from 'cors';
import express from 'express';
import pool from './db.js';
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});



app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});



app.get('/mdo', async (req, res) => {
    try {
        const query = `
        SELECT M.*, P.nom_objet 
        FROM public."MDO" M
        JOIN public."Province" P ON M."Code" = P.objectid_1
    `;
    const allMdo = await pool.query(query);
      res.json(allMdo.rows);
      console.log(allMdo.rows);
    } catch (err) {
      console.error(err.message);
    }
  });


  app.get('/mss', async (req, res) => {
    try {
        const query = `
        SELECT M.*, P.nom_objet 
        FROM public."MSS" M
        JOIN public."Province" P ON M."Code" = P.objectid_1
    `;
    const allMss = await pool.query(query);
      res.json(allMss.rows);
      console.log(allMss.rows);
    } catch (err) {
      console.error(err.message);
    }
  });