<template>
  <div>
    <h1>Lista de Usuarios</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.username }} - {{ user.email }} - {{ user.password }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SegundaPagina',
  data() {
    return {
      users: []
    };
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get('/api/users'); // Utilizar axios para obtener datos de la API
        this.users = response.data; // Los datos se encuentran en response.data con axios
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
      }
    }
  }
};
</script>
