<template>
  <div id="app">
        <img :src="image"/>
        <h1>PROJET TECHNOLOGIE WEB 2021 - 2022</h1>
   
    <router-view> </router-view>
    
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
  padding-bottom: 100px;
}
.menu > ul {
  text-align: right;
  margin-right: 15px;
  font-family: 'Trebuchet MS', sans-serif;
  letter-spacing: 1px;
  list-style-type: none;
  
}
</style>