<!-- components/RegisterForm.vue -->

<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required>
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required>
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required>
    </div>
    <button type="submit">Register</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: ''
    };
  },
  methods: {
    submitForm() {
      // Aquí puedes implementar la lógica para registrar al usuario
      console.log('Name:', this.name);
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      
      // Aquí puedes enviar los datos a tu servidor para el registro
      // Por ejemplo, puedes usar axios para hacer una solicitud HTTP POST
      // axios.post('/api/register', { name: this.name, email: this.email, password: this.password })
      //   .then(response => {
      //     // Manejar la respuesta del servidor
      //   })
      //   .catch(error => {
      //     // Manejar errores
      //   });
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
