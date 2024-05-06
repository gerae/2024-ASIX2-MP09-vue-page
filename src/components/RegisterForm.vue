<!-- components/RegisterForm.vue -->

<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">Username</label>
      <InputText type="username" id="username" v-model="username" required autocomplete="username" placeholder="Username"/>
    </div>
    <div>
      <label for="email">Email:</label>
      <InputText type="email" id="email" v-model="email" required autocomplete="email" placeholder="Email"/>
    </div>
    <FloatLabel>
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required>
    </div>
>>>>>>> 0a094c44943f4deb59e705e1da5f96003fdef64e
    <div v-if="error" class="error-message">{{ error }}</div><br>
    <Button type="submit" label="Register"/>
  </form>
</template>

<script>
import axios from 'axios';
import InputText from 'primevue/inputtext';

// Exportar datos importantes
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      error: ''
    };
  },
  
  // Logica para enviar la informacion a la api
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
      } 
      catch (error) {
        this.error = error.response.data.error
      }
    }
  }
};
</script>

<style scoped>
/* Estilos CSS del formulario */
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
.error-message {
  color: red;
  margin-top: 10px;
}

</style>
