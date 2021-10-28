<template>
  <div id="app">
        <img :src="image"/>
        <h1>PROJET TECHNOLOGIE WEB 2021 - 2022</h1>
    <router-link to="/">
    <md-button class="md-raised md-accent">ACCUEIL</md-button>
    </router-link>
    <router-view> </router-view>
    <HelloWorld />
    
  </div>
  
</template>

<script>
import image from "./assets/miage.jpg"

export default {
  name: 'App',
  components: {
  },
  data: function(){
    return {
      image: image
    }
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