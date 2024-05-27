<template>
  <div id="app">
    <Header />
      <main>
        <router-view />
      </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/header.vue';
import Footer from './components/footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  }
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  margin: 0;
  margin-left: 0px;
}

main {
  margin-top: 72px;
}

body {
  padding: 0px;
  min-height: auto;
  min-width: auto;
}
</style>
