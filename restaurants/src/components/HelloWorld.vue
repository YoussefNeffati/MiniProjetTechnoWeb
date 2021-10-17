<template>
  <div class="hello">
    <!--<button v-on:click="getRestaurantsFromServer()">test recuperation des restaurants</button>-->
<md-table>
        <md-table-row >
            <md-table-cell > <img src="/restaurants/logo1.jpg" /></md-table-cell>
            <md-table-cell > MINI PROJET TECHNOLOGIE WEB 2021 - 2022</md-table-cell>
            <md-table-cell><img src="/restaurants/logo2.png" /></md-table-cell>
        </md-table-row>
        
    </md-table>
    <!---->
    <form @submit.prevent ="ajouterRestaurant(event)">
        <label>
            Nom : <input name = "name" type="text" required v-model="nom">
        </label>
        <label>
            Cuisine : <input name = "cuisine" type="text" required v-model="cuisine">
        </label>

        <md-button class="md-raised">Ajouter</md-button>
    </form>

    <h1>Nombre de restaurants : {{nbRestaurantsTotal}}</h1>
    <h2>
        <label>Recherche par nom: 
            <input type="text" 
                v-model="nomRecherche"
                @input="getRestaurantsFromServer()"
            >
        </label>
    </h2>
    <p> Nombre de pages total : {{nbPagesTotal}}</p>
    <p>Nb de restaurants par page : 
        <input type="range" min=5 max=100 step=1 
            v-model="pagesize"
            v-on:input="getRestaurantsFromServer()"
        > {{pagesize}}
    </p>
    <md-button class="md-raised" :disabled = "page===0" @click="pagePrecedente">Précédent</md-button>
    <md-button class="md-raised" :disabled = "page===nbPagesTotal" @click="pageSuivante">Suivant</md-button>
    <br>
    <md-table v-model="restaurants" md-sort="name" md-sort-order="asc">
        <md-table-row >
            <md-table-head >Nom</md-table-head>
            <md-table-head>Cuisine </md-table-head>
        </md-table-row>
        
            <md-table-row @click="supprimerRestaurant(item)" slot="md-table-row" slot-scope="{ item}">
                <md-table-cell md-label="Name" md-sort-by="name">{{item.name}}</md-table-cell>
                <md-table-cell md-label="cuisine" md-sort-by="cuisine"> {{item.cuisine}}</md-table-cell>
            </md-table-row>
        
    </md-table>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
            restaurants: [
                {
                    nom: 'café de Paris',
                    cuisine: 'Française'
                },
                {
                    nom: 'Sun City Café',
                    cuisine: 'Américaine'
                }
            ],
            nom: '',
            cuisine: '',
            nbRestaurantsTotal: 0,
            page: 0,
            pagesize: 10,
            nbPagesTotal: 0,
            nomRecherche: "",
            lien: "http://localhost:8080/api/restaurants"
        }),
        mounted() {
            console.log("avant rendu HTML")
            this.getRestaurantsFromServer();
        },
        methods: {
            pagePrecedente() {
                if (this.page === 0) return
                this.page--;
                this.getRestaurantsFromServer();
            },
            pageSuivante() {
                if (this.page === this.dernierePage) return
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
                            this.nbPagesTotal = Math.round(this.nbRestaurantsTotal / this.pagesize);
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
                        method:"DELETE"
                    });
                    this.getRestaurantsFromServer();
                } catch (error) {
                    console.log("erreur pour delete " + error.msg)
                }
            },
            async ajouterRestaurant() {
                // eviter le comportement par defaut
                //event.preventDefault();

                /* this.restaurants.push(
                     {
                         name: this.nom,
                         cuisine: this.cuisine
                     }
                 );*/

                let donneesFormulaire = new FormData();
                donneesFormulaire.append("nom", this.nom);
                donneesFormulaire.append("cuisine", this.cuisine);

               await fetch(this.lien, {
                    method: "POST",
                    body:donneesFormulaire
                })
                this.nom = "";
                this.cuisine = "";

                this.getRestaurantsFromServer();
            },
            getColor(index) {
                return (index % 2) ? 'lightBlue' : 'pink';
            }

        }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
