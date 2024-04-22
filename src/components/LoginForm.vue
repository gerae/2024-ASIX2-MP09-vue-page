<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="name">Username:</label>
      <input type="text" id="name" v-model="name" required>
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required>
    </div>
    <button type="submit">Login</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      password: ''
    };
  },
  mounted() {
    this.submitForm();
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios
        .get('/api/users', { 
          name: this.name,
          password: this.password
        })
        .then(response => {
          console.log('Autenticación exitosa');
        }).catch(error => {
          console.log('Autenticación fallida', error);
        });
      }
    }
  }
};
</script>

<style scoped>
/* Estilos CSS para el componente LoginForm.vue */
form {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

label {
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
