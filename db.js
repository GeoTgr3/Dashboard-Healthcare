import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const { Pool } = require('pg');

const pool = new Pool({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "Dashboard"
});

export default pool;