<template>
  <div class="navbar">
    <h1>{{ msg }}</h1>

  </div>
</template>


<script>

export default {
  name: 'Menu',
  data() {
    return {
      msg: 'Welcome to Your our Webshop'
    }
  }

}
</script>
<style>
.navbar {
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
}
</style>
