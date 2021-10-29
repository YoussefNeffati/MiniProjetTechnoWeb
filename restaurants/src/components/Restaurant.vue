<template>
    <div id="Restaurant">
      <!--<img :src="resto"/> -->
      <!--<h1>Détail d'un restaurant </h1>-->
        <h1>Détail du restaurant qui a pour id : {{id}} </h1>
        <ul>
            <li>Nom : {{restaurant.name}}</li>
            <li>Cuisine : {{restaurant.cuisine}}</li> 
            <li> Image: <img src="../components/image/r1.png"/></li>  
        </ul> 
           
    </div>
</template>
<script>
//import resto from "./assets/r1.png"
export default {
  name: 'Restaurant',
  props: {
  },
  
  computed:{
    id(){
      return this.$route.params.id
    }
  },
  data: function(){
    return {
          restaurant:null,
          //resto: resto
    }
  },
  mounted(){
    console.log("Avant affichage, on pourra faire un fetch...");
    console.log("ID = " + this.id)
    let url = "http://localhost:8080/api/restaurants/" + this.id;
    fetch(url)
    .then(reponse =>{
      return reponse.json();
    }).then(data => {
      console.log(data.restaurant.name)
      this.restaurant = data.restaurant;
    })
  },
  methods: {
  }
  }
</script>
<style scoped>
</style>
