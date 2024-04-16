<script setup lang="ts">
import { ref } from 'vue';

const msg = ref('');

const cars = ref([
  { vin: '123', year: '2012', brand: 'Audi', color: 'Black' },
  { vin: '456', year: '2015', brand: 'BMW', color: 'White' },
  { vin: '789', year: '2018', brand: 'VW', color: 'Red' },
  { vin: '101', year: '2019', brand: 'Volvo', color: 'Black' }
]);
const carOptions = ref([
  { brand: 'Audi', label: 'Audi' },
  { brand: 'BMW', label: 'BMW' },
  { brand: 'VW', label: 'Volkswagen' },
  { brand: 'Volvo', label: 'Volvo' }
]);
const selectedCar = ref(null);
const showMessage = ref(false);

const sayHello = () => {
  alert('¡Hola!');
};

const clearMessage = () => {
  msg.value = '';
};
</script>

<template>
  <main>
    <h1>Playground</h1>

    <!-- InputText con v-model -->
    <div class="input-section">
      <label for="inputMessage">Mensaje:</label>
      <InputText id="inputMessage" v-model="msg" style="margin-right: 0.5rem;" />
      <Button label="Limpiar" icon="pi pi-times" @click="clearMessage" />
    </div>

    <!-- Button con acción -->
    <div class="button-section">
      <Button label="Saludar" @click="sayHello" />
    </div>

    <!-- Checkbox -->
    <div class="checkbox-section">
      <Checkbox v-model="showMessage" binary="true" label="Mostrar mensaje" />
    </div>

    <!-- DataTable con datos -->
    <div class="datatable-section">
      <DataTable :value="cars" :rows="5">
        <Column field="vin" header="Vin"></Column>
        <Column field="year" header="Year"></Column>
        <Column field="brand" header="Brand"></Column>
        <Column field="color" header="Color"></Column>
      </DataTable>
    </div>

    <Paginator v-model:first="first" :rows="1" :totalRecords="12" template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink" />

    <div class="p-3 text-center">
      <img :src="`https://primefaces.org/cdn/primevue/images/nature/nature${first + 1}.jpg`" :alt="first" class="border-round w-full sm:w-30rem" />
    </div>


    <!-- Dropdown con opciones -->
    <div class="dropdown-section">
      <Dropdown :options="carOptions" v-model="selectedCar" optionLabel="brand" placeholder="Seleccionar coche" />
      <p v-if="selectedCar">Coche seleccionado: {{ selectedCar.brand }}</p>
    </div>

    
    
    <!-- Mostrar mensaje si Checkbox está marcado -->
    <div class="message-section" v-if="showMessage">
      <p>{{ msg }}</p>
    </div>
  </main>
</template>

<style scoped>
.main {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.input-section,
.button-section,
.checkbox-section,
.datatable-section,
.dropdown-section,
.message-section {
  margin-bottom: 20px;
}
</style>