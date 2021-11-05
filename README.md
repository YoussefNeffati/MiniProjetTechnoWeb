# Web projet M1 MIAGE 2021-2022
Interface ergonomique avec liste de restaurants.
Ce projet à été réalisé par `Camara Mamadou` et `Neffati Youssef`

## Construit avec

* [Vue.js](https://vuejs.org/)
* [NodeJs](https://nodejs.org)
* [Bootstrap](https://getbootstrap.com)
* [Vue-Material](https://www.creative-tim.com/vuematerial/)
* [Google Maps API](https://developers.google.com/maps?hl=fr)



## Pour commencer

Pour démarrer ce projet, suivez les prochaines instructions.

### Pré-requis

Vous aurez besoin d'installer ces élements : 
* npm
  ```sh
  npm install
  ```

* NodeJS
  ```sh
  https://nodejs.org
  ```

* MongoDB
  ```
  https://docs.mongodb.com/manual/installation/
  ```


### Installation

Les étapes pour installer le projet
 
1. Cloner le repo
   ```sh
   git clone https://github.com/YoussefNeffati/MiniProjetTechnoWeb.git
   ```
2. Ouvrir un terminal dans le repertoire  `MiniProjetTechnoWeb\serveur`
   ```sh
   node .\serverCrudWithMongo.js
   ```
3. Ouvrir un deuxième terminal dans le repertoire  `MiniProjetTechnoWeb\restaurants`
   ```sh
   npm run serve
   ```

### Et vous obiendrez les liens du projet en local


### Exemple : 
```sh
- Local:   http://localhost:8081/
- Network: http://10.188.17.121:8081/
   ```

# Points remarquables du projet :

## Un menu
Un menu déroulant qui permet d'accéder aux pages suivantes:
* ACCUEIL
* A PROPOS
* CONTACT

## Un routeur
Dans le fichier main.js, sont définies les différentes routes pour accéder aux composants du projets:

* Contact

C'est le component qui permet d'afficher informations de contacts.

* Accueil

Notre component principal du projet, il affiche la liste des restaurants, où l'on peut ajouter / supprimer un restaurant, recharcher un restaurant ou encore accéder au détails d'un restaurant.
 
* Restaurant

Ce component affiche le contenu, lorsqu'on clique sur le bouton "Details" concernant un restaurant:
La cuisine, la ville , l'adresse, La photo, la carte google map avec le restaurant à partir de sa longitude et latitude.

* A propos

Component permettant l'affichage d'informations divers si nécessaires.

## Une API Google Map
Utilisation de l'Api de google Maps pour afficher la localisation d'un restaurant à partir des coordonnées latitude et longitude récupérés de la base de données grâce à une requête sur l'api de notre DataBase.
[Explication en vidéo youtube](https://www.youtube.com/watch?v=1znPu_exeBI)


## Un carousel d'images
Utilisation d'un carousel d'images grâce à Bootstrap pour une présentation d'images plus propre.
```html
<b-carousel-slide>
  ```


# Fonctionalités:
### 1 ✅

Faire l'interface graphique de manière ergonomique, en utilisant des composants graphiques issus d'une des bibliothèques graphiques disponibles pour VueJS (vue-material). Mettre un menu sur la gauche, le tableau au centre. 

 --> Vue-material : ```<md-table>```,  ```<md-button>```, ```<md-table-cell>``` etc.
### 2 ✅

Afficher plus d'informations concernant un restaurant et afficher un message "aucun restaurant ne correspond à votre recherche" si le nom qu'on cherche n'existe pas

 --> Grâce à la balise de la bibilothèque Vue-Material ```<md-table-empty-state>``` 

### 3 ✅
Rajouter les boutons "Details" et "Supprimer" dans chaque ligne du tableau, ainsi qu'un bouton "Ajouter" au dessus du tableau


Accéder au détail d'un restaurant:  
```html
<router-link :to="'/restaurant/' + item._id">
<md-button class="md-raised md-primary">Details
</md-button>
</router-link>
```

Supprimer un restaurant: 
```js 
async supprimerRestaurant(id) {
      try {
        await fetch(this.lien + "/" + id, {
          method: "DELETE",
        });
        this.getRestaurantsFromServer();
      } catch (error) {
        console.log("erreur pour delete " + error.msg);
      }
    }
```
Ajouter un restaurant : 
```js 
async ajouterRestaurant() {
  let donneesFormulaire = new FormData();
      donneesFormulaire.append("name", this.name);
      donneesFormulaire.append("cuisine", this.cuisine);
      donneesFormulaire.append("borough", this.borough);

      await fetch(this.lien, {
        method: "POST",
        body: donneesFormulaire,
      });
      this.name = "";
      this.cuisine = "";
      this.borough = "";
      this.getRestaurantsFromServer();
    },
    getColor(index) {
      return index % 2 ? "lightBlue" : "pink";
    },
  },
};
```

### 4 ✅
Afficher les informations détaillées  d'un restaurant: 
* Nom
* Cuisine
* Ville 
* Adresse
```html
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
```
Une carte Google map avec la localisation du restaurant.
```html
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
```