<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">Nombre de usuario:</label>
      <input type="text" id="username" v-model="username" required autocomplete="username">
    </div>
    <div>
      <label for="password">Contraseña:</label>
      <input type="password" id="password" v-model="password" required>
    </div>
    <div v-if="error" class="error-message">{{ error }}</div><br>
    <Button type="submit">Iniciar sessión</Button>
  </form>
</template>

<script>
import axios from 'axios';  

export default {
  data() {
    return {
      username: '',
      password: '',
      error: ''
    };
  },
  // Validar dades form
  methods: {
    async submitForm() {
      try {
        const response = await axios.post('/api/login', {
          username: this.username,
          password: this.password
        })
        // Afegir cookie
        document.cookie = `jwt=${response.data.token}`
        localStorage.setItem('localjwt',response.data.token);
        this.$store.commit('setAuthentication', true);
        router.push('/');
        // Moure a la pagina solicitada en cas de utilitzar "requierauth" this.$router.replace(this.$route.query.from);
      } catch (error) {
        this.error = error.response.data.error
        console.log(error)
      }
    }
  } 
};
</script>

<style scoped>
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

.error-message {
  color: red;
  margin-top: 10px;
}
</style>
