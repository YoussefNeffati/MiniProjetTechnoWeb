<template>
  <div class="hello">
    <!--ajout menu-->
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
    <h1>Nombre de restaurants : {{ nbRestaurantsTotal }}</h1>
    <form @submit.prevent="ajouterRestaurant(event)">
      <label>
        Nom : <input name="name" type="text" required v-model="nom" />
      </label>
      <label>
        Cuisine :
        <input name="cuisine" type="text" required v-model="cuisine" />
      </label>

      <button>Ajouter</button>
    </form>

    <h2>
      <label
        >Recherche par nom:
        <md-field md-clearable class="md-toolbar-section-end">
          <md-input
            type="text"
            v-model="nomRecherche"
            placeholder="Seuda"
            @input="getRestaurantsFromServer()"
          />
        </md-field>
      </label>
    </h2>
    <p>Nombre de pages total : {{ nbPagesTotal }}</p>
    <p>
      Nb de restaurants par page :
      <input
        type="range"
        min="5"
        max="100"
        step="1"
        v-model="pagesize"
        v-on:input="getRestaurantsFromServer()"
      />
      {{ pagesize }}
    </p>
    <md-button :disabled="page === 0" @click="pagePrecedente"
      >Précédent</md-button
    >
    <md-button :disabled="page === nbPagesTotal" @click="pageSuivante"
      >Suivant</md-button
    >
    <br />

    <md-table
      v-model="restaurants"
      md-sort="name"
      md-sort-order="asc"
      md-card
      md-fixed-header
      class="tab"
    >
      <md-table-toolbar>
        <h1 class="md-title">Liste restaurants</h1>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Name" md-sort-by="name">
          {{ item.name }}
        </md-table-cell>
        <md-table-cell md-label="Cuisine" md-sort-by="cuisine">{{
          item.cuisine
        }}</md-table-cell>
        <md-table-cell md-label="Ville">{{ item.borough }}</md-table-cell>
        <md-table-cell md-label="Action">
          <!--<md-button>Details</md-button>-->
          <router-link :to="'/restaurant/' + item._id"
            ><md-button class="md-raised md-primary">Details</md-button>
          </router-link>
          <md-button
            v-on:click="supprimerRestaurant(item._id)"
            class="md-raised md-accent"
            >Supprimer</md-button
          >
        </md-table-cell>
      </md-table-row>

      <md-table-empty-state
        md-label="aucun restaurant trouvé"
        :md-description="`aucun restaurant ne correspond à votre recherche pour '${nomRecherche}'. Essayez un autre nom de recherche ou ajoutez un nouveau nom restaurant.`"
      >
      </md-table-empty-state>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({
    restaurants: [],
    nom: "",
    cuisine: "",
    nbRestaurantsTotal: 0,
    page: 0,
    pagesize: 10,
    nbPagesTotal: 0,
    nomRecherche: "",
    lien: "http://localhost:8080/api/restaurants",
  }),
  mounted() {
    console.log("avant rendu HTML");
    this.getRestaurantsFromServer();
  },
  methods: {
    pagePrecedente() {
      if (this.page === 0) return;
      this.page--;
      this.getRestaurantsFromServer();
    },
    pageSuivante() {
      if (this.page === this.dernierePage) return;
      this.page++;
      this.getRestaurantsFromServer();
    },
    getRestaurantsFromServer() {
      let url = this.lien;
      url += "?page=" + this.page;
      url += "&pagesize=" + this.pagesize;
      url += "&name=" + this.nomRecherche;

      fetch(url)
        .then((responseJSON) => {
          responseJSON.json().then((resJS) => {
            //afficheResponseGET(res);
            //console.log(resJS)
            this.restaurants = resJS.data;
            this.nbRestaurantsTotal = resJS.count;
            this.nbPagesTotal = Math.round(
              this.nbRestaurantsTotal / this.pagesize
            );
          });
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    async supprimerRestaurant(id) {
      //this.restaurants.splice(index, 1);
      try {
        await fetch(this.lien + "/" + id, {
          method: "DELETE",
        });
        this.getRestaurantsFromServer();
      } catch (error) {
        console.log("erreur pour delete " + error.msg);
      }
    },
    async ajouterRestaurant() {
      let donneesFormulaire = new FormData();
      donneesFormulaire.append("nom", this.nom);
      donneesFormulaire.append("cuisine", this.cuisine);

      await fetch(this.lien, {
        method: "POST",
        body: donneesFormulaire,
      });
      this.nom = "";
      this.cuisine = "";

      this.getRestaurantsFromServer();
    },
    getColor(index) {
      return index % 2 ? "lightBlue" : "pink";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.md-field {
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}
.menu {
  float: left;
  position: fixed;
  top: 10px;
}

.tab {
  width: 50%;
  height: 50%;
  margin-left: auto;
  margin-right: auto;
}
</style>
