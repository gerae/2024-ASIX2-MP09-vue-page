// Crea la conexión a la base de datos
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: import.meta.env.DB_DATABASE
});

// Conecta a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error de conexión a la base de datos:', err.stack);
        return;
    }
    console.log('Conexión a la base de datos MySQL establecida');
});

// Exporta la conexión para ser utilizada en otros módulos
export default connection;
