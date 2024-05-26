<!-- views/LoginView.vue -->

<template>
    <div>
      <h1>Login</h1>
      <LoginForm />
    </div>
    <br>
  </template>
  
  <script>
  import LoginForm from '../components/LoginForm.vue';

  export default {
    components: {
      LoginForm // Registrar el componente LoginForm
    }
  };
  </script>
  
  <style scoped>
  /* Estilos CSS para la vista LoginView.vue */
  h1 {
    text-align: center;
  }
  </style>
  