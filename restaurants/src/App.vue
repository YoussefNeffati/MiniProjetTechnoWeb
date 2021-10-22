<template>
  <div id="app">
    <router-link to="/">[HelloWorld]</router-link>
    <router-link to="/DetailRestaurants">     Detail d'un Restaurant</router-link>
    

    <router-view> </router-view>
    <HelloWorld />
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>