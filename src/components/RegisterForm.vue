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
    <div>
      <label for="password">Password:</label>
      <Password type="password" id="password" v-model="password" required toggle-mask placeholder="Password">
        <template #footer>
          <Divider />
          <p class="mt-2">Suggestions</p>
          <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
            <li>At least one lowercase</li>
            <li>At least one uppercase</li>
            <li>At least one numeric</li>
            <li>Minimum 8 characters</li>
          </ul>
        </template>
      </Password>
    </div>
    <div v-if="error" class="error-message">{{ error }}</div><br>
    <Button type="submit" label="Register"/>
  </form>
</template>

<script>
import Password from 'primevue/password';
import router from '../router/routes'
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
        router.push('/');
      } 
      catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: { Password, InputText }
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
