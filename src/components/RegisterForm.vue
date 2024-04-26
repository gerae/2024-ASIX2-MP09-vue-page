<!-- components/RegisterForm.vue -->

<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">Name:</label>
      <input type="text" id="username" v-model="username" required autocomplete="username">
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required autocomplete="email">
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required>
    </div>
    <button type="submit">Register</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      email: '',
      password: ''
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post('/api/register', {
          username: this.username,
          email: this.email,
          password: this.password
        });
        console.log(response.data.message);
        // Aquí puedes redirigir al usuario a la página de inicio de sesión o hacer lo que necesites después del registro exitoso
      } catch (error) {
        console.error('Error al registrar usuario:', error);
      }
    }
  }
};
</script>

<style scoped>
/* Estilos CSS para el componente RegisterForm.vue */
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
  background-color: #28a745; /* Color verde para el botón de registro */
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #218838; /* Color verde más oscuro al pasar el ratón */
}
</style>
