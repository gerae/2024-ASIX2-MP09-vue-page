<template>
    <div>
      <!-- Header -->
      <div class="fixed-top">
        <div class="header-container">
          <img src="../assets/logo.png" alt="Logo" class="logo" />
          <Menubar :model="items" class="p-menubar">
            <template #item="{ item, props, hasSubmenu }">
              <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                <a ripple :href="href" v-bind="props.action" @click="navigate" class="nav-link">
                  <span :class="item.icon" />
                  <span class="ml-2">{{ item.label }}</span>
                </a>
              </router-link>
              <a v-else ripple :href="item.url" :target="item.target" v-bind="props.action" class="nav-link">
                <span :class="item.icon" />
                <span class="ml-2">{{ item.label }}</span>
                <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down ml-2" />
              </a>
            </template>
          </Menubar>
        </div>
      </div>
      <!-- Main content -->
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  // Rutas a las diferentes páginas
  const items = ref([
    { label: 'Inicio', route: '/' },
    { label: 'Segunda Página', route: '/segunda-pagina' },
    { label: 'Registro', route: '/sign-up' },
    { label: 'Login', route: '/login' },
    {
      label: 'profile',
      items: [
        { label: 'Perfil', route: '/profile' },
        { label: 'Logout', route: '/logout' }
      ]
    },
  ]);
  </script>
  
  <style>
  .p-menubar {
    border-radius: 0;
    border: 0;
  }
  
  /* Estilos para fijar el header en la parte superior */
  .fixed-top {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    width: 100%;
  }
  
  /* Estilos del contenedor del header */
  .header-container {
    display: flex; /* Para alinear los elementos en línea */
    align-items: center; /* Para alinear verticalmente */
    background-color: transparent; /* Fondo transparente */
    padding: 0; /* Sin relleno */
    border-radius: 0;
  }
  
  /* Estilos para los enlaces del menú */
  .nav-link {
    background-color: transparent; /* Fondo transparente */
    margin-left: 0px;
  }
  
  /* Estilos para el logo */
  .logo {
    width: 80px; /* Ajusta el ancho según sea necesario */
    height: auto; /* Mantiene la proporción de aspecto */
    margin-right: 10px; /* Espacio entre el logo y el menú */
  }
  </style>
  