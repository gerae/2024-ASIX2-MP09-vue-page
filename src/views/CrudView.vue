<template>
  <div>
    <div id="page-container">
      <h1>Clasificacion</h1>
      <InputText v-model="searchText" placeholder="Buscar jugador"/>
      <DataTable :value="filteredUsers" stripedRows tableStyle="min-width: 50rem">
        <Column field="id" header="ID"></Column>
        <Column field="username" header="Nombre"></Column>
        <Column field="points" sortable header="Puntos"></Column>
      </DataTable>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SegundaPagina',

  data() {
    return {
      users: [],
      searchText: ''
    };
  },
  computed: {
    filteredUsers() {
      if (!this.searchText) {
        return this.users;
      } else {
        const searchTextLower = this.searchText.toLowerCase();
        return this.users.filter(user =>
          user.username.toLowerCase().includes(searchTextLower)
        );
      }
    }
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get('/api/users');
        this.users = response.data;
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
      }
    }
  }
};
</script>

<style>
#page-container {
  display: flex;
  flex-direction: column;
  margin: 0rem 2rem 2rem 2rem
}
</style>
