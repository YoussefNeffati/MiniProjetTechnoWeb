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
      <div class="left-column">
        <img src="../components/image/Restaurants.jpg" />
      </div>

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
            lat: restaurant.address.coord[0],
            lng: restaurant.address.coord[1],
          }"
          :zoom="2"
          map-type-id="terrain"
          style="width: 450px; height: 240px; margin: 15px 0px 0px 38px"
        >
          <gmap-marker
            :position="{
              lat: restaurant.address.coord[0],
              lng: restaurant.address.coord[1],
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
  methods: {},
};
</script>
<style scoped>
.menu {
  float: left;
  position: fixed;
  top: 10px;
}
.wrapper {
  height: 430px;
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
  padding-top: 30px;
  font-size: 34px;
  color: #474747;
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

.left-column img {
  border-radius: 7px 0 0 7px;
  float: left;
  height: 430px;
  width: 327px;
  position: relative;
}
</style>
