# MiniProjetTechnoWeb
Interface ergonomique avec liste de restaurant en affichant plus d'informations.
## Auteurs
CAMARA Mamadou
NEFFATI Youssef

Dans ce mini projet nous avons pu faire les points suivants:
## 1
Faire l'interface graphique de manière ergonomique, en utilisant des composants graphiques issus d'une des bibliothèques graphiques disponibles pour VueJS (vue-material). 
Mettre un menu sur la gauche, le tableau au centre.
## 2
Afficher plus d'informations concernant un restaurant et afficher un message "aucun restaurant ne correspond à votre recherche" si le nom qu'on cherche n'existe pas
## 3
Rajouter les boutons "Details" et "Supprimer" dans chaque ligne du tableau
## 4
Afficher les informations détaillées sur le restaurant: une photo, une carte Google Map

# Démarrage
Pour lancer notre mini projet:
On ouvre deux terminaux en parallèle:
Dans le premier, on se place dans le repertoire MiniProjetTechnoWeb\restaurants> 
on tape la commande npm run serve

Et on a par exemple:
- Local:   http://localhost:8081/
  - Network: http://10.188.17.121:8081/

Dans le second, on se place dans le repertoire MiniProjetTechnoWeb\serveur> 
et on tape la commande node .\serverCrudWithMongo.js
Ensuite dans le navigateur, il faut taper l'une des options affichée dans le premier terminal

# Menu
Dans notre menu nous avons:
## ACCUEIL
Qui affiche la page d'accueil, comportant la liste des restaurants, avec l'option détails, suppression, ajout, la recherche d'un restaurant
 
## APROPOS
Indication d'application des notions du cours

## Contact
Qui contient nos différents contacts

# Nos components
Dans le fichier main.js, sont définies les différentes routes de ces components
Nous avons 4:
## Contact
C'est le component qui permet d'afficher le contenu de contact se trouvant dans le menu

## HelloWorld
Component plus principal du projet, il comprend la majeur des methodes:
par exemple, ajout d'un restaurant, suppression d'un restaurant.
En gros le contenu de l'option accueil dans le menu
## Restaurant
Ce component affiche le contenu, lorsqu'on clique sur le bouton "Details" concernant un restaurant:
La cuisine, la ville , l'adresse, La photo, la carte google map avec le restaurant à partir de sa longitude et latitude
## Propos
Contenu de l'option A PROPOS du menu
# Sources

# Lien vidéo youtube
