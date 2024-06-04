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
      msg: 'The ultimate Webshop'
    }
  }

}
</script>
<style>
.navbar {
  background-color: #1a4f84;
  color: white;
  padding: 10px;
  text-align: center;
}
</style>
