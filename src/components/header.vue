<template>
      <div>
        <div class="header-container">
          <Menubar :model="items" class="p-menubar"> <!-- Component MenuBar de PrimeVue -->
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
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  // Ruta a les pagines
  const items = ref([
    { label: 'Home', route: '/' },
    { label: 'Clasificación', route: '/users-table' },
    { label: 'Registro', route: '/sign-up' },
    { label: 'Iniciar session', route: '/login' },
    {
      label: 'Perfil',
      items: [
        { label: 'Perfil', route: '/profile' },
        { label: 'Logout', route: '/logout' }
      ]
    },
  ]);
  </script>
  
  <style>
  .p-menubar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 72px;
    z-index: 1000;
    border-radius: 0;
    border-color: rgb(160, 160, 160)
  }
  
  .header-container {
    align-items: center;
    padding: 0;
    border-radius: 0;
  }
  
  </style>