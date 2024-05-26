<!-- views/RegisterView.vue -->

<template>
    <div>
      <h1>Register</h1>
      <RegisterForm />
    </div>
    <br>
  </template>
  
  <script>
  import RegisterForm from '../components/RegisterForm.vue'; // Importar el componente RegisterForm.vue
  
  export default {
    components: {
      RegisterForm // Registrar el componente RegisterForm
    }
  };
  </script>
  
  <style scoped>
  h1 {
    text-align: center;
  }
  </style>
  