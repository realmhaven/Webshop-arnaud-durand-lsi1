<template>
  <div class="container">
    <Menu></Menu>
    <IndexPage></IndexPage>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import IndexPage from "./components/IndexPage.vue";


export default {
  name: 'App',
  components: {
    IndexPage,
    Menu
  }
}
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f0f0f0;
}

</style>
