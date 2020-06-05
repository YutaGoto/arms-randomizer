<template>
  <div id="app">
    <Arms msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Arms from './components/Arms.vue'

export default {
  name: 'App',
  components: {
    Arms
  }
}
</script>

<style>
html, body {
  background-color: #ffff3e;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
