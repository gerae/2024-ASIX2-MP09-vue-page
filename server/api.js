import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import express from 'express';
import mysql from 'mysql';
import dotevn from 'dotenv'
dotevn.config()

const api = express();

api.use(express.json());

// Buscar los datos para la conneixion
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

connection.connect(err => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión a la base de datos MySQL establecida');
});

// Query para obtener la tabla users.
api.get('/users', (req, res) => {
  const query = 'SELECT * FROM users';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error al obtener usuarios:', err);
      res.status(500).json({ error: 'Error al obtener usuarios' });
      return;
    }
    res.json(results);
  });
});

api.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  // Verificar si el usuario ya existe
  const userExistsQuery = 'SELECT * FROM users WHERE email = ?';
  connection.query(userExistsQuery, [email], async (err, results) => {
    if (err) {
      console.error('Error al verificar usuario:', err);
      res.status(500).json({ error: 'Error al verificar usuario' });
      return;
    }

    if (results.length > 0) {
      res.status(400).json({ error: 'El correo electrónico ya existe' });
      return;
    }
    const userExistsQuery = 'SELECT * FROM users WHERE username = ?';
    connection.query(userExistsQuery, [username], async (err, results) => {
      if (err) {
        console.error('Error al verificar usuario:', err);
        res.status(500).json({ error: 'Error al verificar usuario' });
        return;
      }
    
      if (results.length > 0) {
        res.status(400).json({ error: 'El nombre de usuario ya existe' });
        return;
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
      connection.query(query, [username, email, hashedPassword], (err, results) => {
        if (err) {
          console.error('Error al registrar usuario:', err);
          res.status(500).json({ error: 'Error al registrar usuario' });
          return;
        }
        res.json({ message: 'Usuario registrado con éxito' });
      });
    });
  });
});

api.post('/login', (req, res) => {
  const { username, password } = req.body;
  const query = 'SELECT * FROM users WHERE username = ?';
  connection.query(query, [username], async (err, results) => {
    if (err || results.length === 0) {
      res.status(500).json({ error: 'Error al iniciar sesión' });
      return;
    }
    const user = results[0];
    const passwordMatches = await bcrypt.compare(password, user.password);
    if (!passwordMatches) {
      res.status(401).json({ error: 'Contraseña incorrecta' });
      return;
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    res.json({ message: 'JWT:', token });
  });
});

// Iniciar el servidor
api.listen(process.env.API_PORT, () => {
  console.log(`Servidor de API iniciado en http://localhost:${process.env.API_PORT}`);
});