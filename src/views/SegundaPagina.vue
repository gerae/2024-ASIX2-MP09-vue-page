<!-- SegundaPagina.vue -->
<template>
  <div>
    <h1>Lista de Usuarios</h1>
    <ul>
      <li v-for="user in users" :key="user.id"> <!-- Obeter datos de la tabla users -->
        {{ user.name }} - {{ user.email }}
      </li>
    </ul>
  </div>
</template>

<script>
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
        const response = await fetch('/api/users'); // Obtener datos de la API
        if (response.ok) {
          this.users = await response.json();
        } else {
          console.error('Error al obtener usuarios:', response.statusText);
        }
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
      }
    }
  }
};
</script>
