<template>
  <div>
    <div class="menu">
      <md-menu md-direction="bottom-start">
        <md-button md-menu-trigger>
          <md-icon md-theme="green" class="md-primary"> menu </md-icon>
        </md-button>
        <md-menu-content>
          <router-link to="/">
            <md-menu-item>ACCUEIL</md-menu-item>
          </router-link>
          <router-link to="/propos/">
            <md-menu-item>A PROPOS</md-menu-item>
          </router-link>
          <router-link to="/contact/">
            <md-menu-item>CONTACTS</md-menu-item>
          </router-link>
        </md-menu-content>
      </md-menu>
    </div>

    <div class="wrapper">
      <!-- Left Column / Headphones Image -->

      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="2000"
        controls
        indicators
        background="#ccc"
        style="
          border-radius: 7px 0 0 7px;
          float: left;
          height: 420px;
          width: 327px;
        "
       
      >
        <b-carousel-slide img-src="https://images.unsplash.com/photo-1583426189374-8090f9dd26cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=731&q=80">
        </b-carousel-slide>
        <b-carousel-slide
          img-src="https://images.unsplash.com/photo-1613946069412-38f7f1ff0b65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80"
        ></b-carousel-slide>
        <b-carousel-slide
          img-src="https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80"
        ></b-carousel-slide>
      </b-carousel>

      <div class="right-column">
        <!--<h1>Détail d'un restaurant </h1>-->
        <h1>{{ restaurant.name }}</h1>
        <h2>Cuisine : {{ restaurant.cuisine }}</h2>
        <h3>Ville : {{ restaurant.borough }}</h3>
        <h4>
          Adresse :
          {{
            restaurant.address.building +
            ", " +
            restaurant.address.street +
            ", " +
            restaurant.address.zipcode
          }}
        </h4>

        <gmap-map
          :center="{
            lat: restaurant.address.coord[1],
            lng: restaurant.address.coord[0],
          }"
          :zoom="10"
          map-type-id="roadmap"
          style="width: 450px; height: 260px; margin: 25px 0px 0px 38px"
        >
          <gmap-marker
            :position="{
              lat: restaurant.address.coord[1],
              lng: restaurant.address.coord[0],
            }"
          >
          </gmap-marker>
        </gmap-map>
      </div>
    </div>
  </div>
</template>

<script>
//import resto from "./assets/r1.png"
export default {
  name: "Restaurant",
  props: {},
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  data: function () {
    return {
      restaurant: "",
      slide: 0,
      sliding: null,
    };
  },
  mounted() {
    console.log("Avant affichage, on pourra faire un fetch...");
    console.log("ID = " + this.id);
    let url = "http://localhost:8080/api/restaurants/" + this.id;
    fetch(url)
      .then((reponse) => {
        return reponse.json();
      })
      .then((data) => {
        console.log(data.restaurant.name);
        this.restaurant = data.restaurant;
      });
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>
<style scoped>
.menu {
  float: left;
  position: fixed;
  top: 10px;
}
.wrapper {
  height: 436px;
  width: 900px;
  margin: 50px auto;
  border-radius: 7px 7px 7px 7px;
  /* VIA CSS MATIC https://goo.gl/cIbnS */
  -webkit-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  position: relative;
}

/* Columns */
.left-column {
  width: 65%;
  position: relative;
}

.right-column {
  float: left;
  height: 420px;
  width: 570px;
  border-radius: 0 7px 10px 7px;
  background-color: #ffffff;
  position: relative;
}

.right-column h1 {
  padding-top: 20px;
  font-size: 44px;
  color: #d8790e;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.right-column h2,
h3,
h4 {
  margin: 0 0 0px 38px;
  font-size: 13px;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  color: #000000;
  letter-spacing: 0.2em;
  text-align: left;
}
</style>
