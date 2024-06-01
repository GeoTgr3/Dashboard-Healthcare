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
// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

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

app.put('/mdo/:code', async (req, res) => {
  const { code } = req.params;
  const { RAA, Charbon_humain, Hepatite_virale, Brucellose, Leptospirose, Leishmanioses, Gastro_Enterites_aigues, Conjonctivite_Nouveau_Ne, Hydatidose, Leishmaniose_viscerale } = req.body;

  try {
    const query = `
      UPDATE public."MDO"
      SET 
        "RAA" = $1,
        "Charbon_humain" = $2,
        "Hepatite_virale" = $3,
        "Brucellose" = $4,
        "Leptospirose" = $5,
        "Leishmanioses" = $6,
        "Gastro_Enterites_aigues" = $7,
        "Conjonctivite_Nouveau_Ne" = $8,
        "Hydatidose" = $9,
        "Leishmaniose_viscerale" = $10
      WHERE "Code" = $11
    `;
    const values = [RAA, Charbon_humain, Hepatite_virale, Brucellose, Leptospirose, Leishmanioses, Gastro_Enterites_aigues, Conjonctivite_Nouveau_Ne, Hydatidose, Leishmaniose_viscerale, code];
    const result = await pool.query(query, values);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Record not found' });
    }

    res.json({ message: 'Record updated successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.put('/mss/:code', async (req, res) => {
  const { code } = req.params;
  const {
    Rougeole,
    Coqueluche,
    Tetanos,
    Meningite_a_meningocoque,
    Typhoide,
    Trachome,
    Diphterie,
    Bilharziose,
    Tuberculose,
    Lepre,
    Urethrites,
    Syphilis,
    Rage,
    Toxi_infections_alimentaires_collectives,
    Paludisme_importe,
    Syndrome_grippal_17_18
  } = req.body; // Removed nom_objet from destructuring

  try {
    const query = `
      UPDATE public."MSS"
      SET 
        "Rougeole" = $1,
        "Coqueluche" = $2,
        "Tetanos" = $3,
        "Meningite_a_meningocoque" = $4,
        "Typhoide" = $5,
        "Trachome" = $6,
        "Diphterie" = $7,
        "Bilharziose" = $8,
        "Tuberculose" = $9,
        "Lepre" = $10,
        "Urethrites" = $11,
        "Syphilis" = $12,
        "Rage" = $13,
        "Toxi_infections_alimentaires_collectives" = $14,
        "Paludisme_importe" = $15,
        "Syndrome_grippal_17_18" = $16
      WHERE "Code" = $17
    `;
    const values = [
      Rougeole,
      Coqueluche,
      Tetanos,
      Meningite_a_meningocoque,
      Typhoide,
      Trachome,
      Diphterie,
      Bilharziose,
      Tuberculose,
      Lepre,
      Urethrites,
      Syphilis,
      Rage,
      Toxi_infections_alimentaires_collectives,
      Paludisme_importe,
      Syndrome_grippal_17_18,
      code
    ];
    const result = await pool.query(query, values);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Record not found' });
    }

    res.json({ message: 'Record updated successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Fetch MSSRef data
app.get('/mssref', async (req, res) => {
  try {
    const mssRefQuery = 'SELECT * FROM "MSSRef" LIMIT 1';
    const mssRefResult = await pool.query(mssRefQuery);
    res.json(mssRefResult.rows[0]);
  } catch (err) {
    console.error('Error fetching MSSRef data:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Fetch MDORef data
app.get('/mdoref', async (req, res) => {
  try {
    const mdoRefQuery = 'SELECT * FROM "MDORef" LIMIT 1';
    const mdoRefResult = await pool.query(mdoRefQuery);
    res.json(mdoRefResult.rows[0]);
  } catch (err) {
    console.error('Error fetching MDORef data:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT Endpoint for updating the first MSSRef record
app.put('/mssref', async (req, res) => {
  const {
    Rougeole, Coqueluche, Tetanos, Meningite_a_meningocoque, Typhoide, Trachome, Diphterie,
    Bilharziose, Tuberculose, Lepre, Urethrites, Syphilis, Rage, Toxi_infections_alimentaires_collectives,
    Paludisme_importe, Syndrome_grippal_17_18
  } = req.body;

  try {
    const query = `
      UPDATE public."MSSRef"
      SET "Rougeole" = $1, "Coqueluche" = $2, "Tetanos" = $3, "Meningite_a_meningocoque" = $4,
          "Typhoide" = $5, "Trachome" = $6, "Diphterie" = $7, "Bilharziose" = $8, "Tuberculose" = $9,
          "Lepre" = $10, "Urethrites" = $11, "Syphilis" = $12, "Rage" = $13,
          "Toxi_infections_alimentaires_collectives" = $14, "Paludisme_importe" = $15, "Syndrome_grippal_17_18" = $16
      WHERE EXISTS (SELECT 1 FROM public."MSSRef" LIMIT 1)
    `;
    const values = [
      Rougeole, Coqueluche, Tetanos, Meningite_a_meningocoque, Typhoide, Trachome,
      Diphterie, Bilharziose, Tuberculose, Lepre, Urethrites, Syphilis, Rage,
      Toxi_infections_alimentaires_collectives, Paludisme_importe, Syndrome_grippal_17_18
    ];
    await pool.query(query, values);
    res.json({ message: 'First MSSRef record updated successfully' });
  } catch (err) {
    console.error('Error updating MSSRef record:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// PUT Endpoint for updating the first MDORef record
app.put('/mdoref', async (req, res) => {
  const {
    RAA, Charbon_humain, Hepatite_virale, Brucellose, Leptospirose, Leishmanioses,
    Gastro_Enterites_aigues, Conjonctivite_Nouveau_Ne, Hydatidose, Leishmaniose_viscerale
  } = req.body;

  try {
    const query = `
      UPDATE public."MDORef"
      SET "RAA" = $1, "Charbon_humain" = $2, "Hepatite_virale" = $3, "Brucellose" = $4,
          "Leptospirose" = $5, "Leishmanioses" = $6, "Gastro_Enterites_aigues" = $7,
          "Conjonctivite_Nouveau_Ne" = $8, "Hydatidose" = $9, "Leishmaniose_viscerale" = $10
      WHERE EXISTS (SELECT 1 FROM public."MDORef" LIMIT 1)
    `;
    const values = [
      RAA, Charbon_humain, Hepatite_virale, Brucellose, Leptospirose, Leishmanioses,
      Gastro_Enterites_aigues, Conjonctivite_Nouveau_Ne, Hydatidose, Leishmaniose_viscerale
    ];
    await pool.query(query, values);
    res.json({ message: 'First MDORef record updated successfully' });
  } catch (err) {
    console.error('Error updating MDORef record:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
