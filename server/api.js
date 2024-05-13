import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import express from 'express';
import mysql from 'mysql';
import dotevn from 'dotenv'
dotevn.config()

const api = express();

api.use(express.json());

// Obtener datos la base de datos usando dotenv
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
  const hashedPassword = bcrypt.hashSync('admin', 10);

  // Insertar el usuario en la base de datos
  const user = {
    username: 'admin',
    email: 'admin@admin.com',
    password: hashedPassword,
  }
  connection.query(`INSERT INTO ${process.env.DB_DATABASE}.${process.env.DB_TABLE} SET ?`, user, (error, results) => {
    if (error) {
      console.error('Error al insertar el usuario:', error);
    } else {
      console.log(`Usuario admin insertado correctamente\nCredenciales: admin:admin`);
    }
  });
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

// Logica para obtener los datos necessarios para el registro de usuarios.
api.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  // Verificar si el correo electronico ya existe
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

    //Verificar si el nombre de usuario ya existe
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
      
      //Hashear la contraseña y insertar los datos del registro en la base de datos
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

// Logica para obtener los datos necessarios para el login de usuarios.
api.post('/login', (req, res) => {
  const { username, password } = req.body;
  const query = 'SELECT * FROM users WHERE username = ?';
  connection.query(query, [username], async (err, results) => {
    if (err || results.length === 0) {
      res.status(401).json({ error: 'Usuario o contraseña incorrectos' });
      return;
    }

    const user = results[0]
    // Validar que la contraseña coincide
    const passwordMatches = await bcrypt.compare(password, user.password);
    if (!passwordMatches) {
      res.status(401).json({ error: 'Usuario o contraseña incorrectos' });
      return;
    }
    try {
      const payload = {
        id: user.id,
        email: user.email,
        created_at: user.created_at,
        username: user.username
      }; 
      const token = jwt.sign(
        payload, 
        process.env.JWT_SECRET,
      );
      res.json({
        token,
        success: true,
        user: {
          email: payload.email,
          username: payload.username,
        },
      });
    } 
    catch (error) {
      console.log(error);
      res.status(401).json({ error: 'Usuario o contraseña incorrectos' });
    }

    // En un entorno real, se tendria que usar una configuracion parecida a esta, al trabajar en localhost no funciona correctamente.
    /* try {
      const payload = {
        id: user.id,
        email: user.email,
        createdAt: user.createdAt,
        username: user.username
      }; 
      const token = jwt.sign(
        payload, 
        process.env.JWT_SECRET, 
        {expiresIn: 60 * 60 * 24 * 30,},
        (_err, token) => {
          const serialized = serialize('token', token, {
            httpOnly: true,
            //secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 30,
            path: '/',
          });
          res.setHeader('Set-Cookie', serialized);
          res.json({
            token,
            success: true,
            user: {
              email: payload.email,
              username: payload.username,
            },
          });
        },
      );
    } catch (error) {
      console.log(error);
      res.status(401).json({ error: 'Usuario o contraseña incorrectos' });
    }  */
  });
});

// Iniciar el servidor
api.listen(process.env.API_PORT, () => {
  console.log(`Servidor de API iniciado en http://localhost:${process.env.API_PORT}`);
});