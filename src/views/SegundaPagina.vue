<template>
  <div>
    <h1>Lista de Usuarios</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} - {{ user.email }}
      </li>
    </ul>
  </div>
</template>

<script>
// Importa la conexión a la base de datos desde el archivo db.js
import connection from '../stores/db.js';

export default {
    name: 'SegundaPagina',
    data() {
        return {
            users: []
        };
    },
    mounted() {
        // Realiza la consulta a la base de datos al cargar el componente
        this.fetchUsers();
    },
    methods: {
        fetchUsers() {
            // Realiza la consulta a la base de datos
            connection.query('SELECT * FROM users', (error, results) => {
                if (error) {
                    console.error('Error al obtener usuarios:', error);
                    return;
                }
                this.users = results; // Asigna los resultados a la propiedad 'users'
            });
        }
    }
};
</script>
