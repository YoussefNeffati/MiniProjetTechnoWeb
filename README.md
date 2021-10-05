# MiniProjetTechnoWeb

Dans ce mini projet je vous demanderai d'essayer de faire les choses suivantes. Ne vous affolez pas si vous ne pouvez pas tout faire, j'attends un travail personnel qui vous apporte quelque chose, pas des fonctionnalités au kilo copiées à droite ou à gauche. Faites ce que vous pouvez honnêtement, fournissez un travail minimal et vous aurez une note correcte. Allez-y tranquillement, et je peux vous aider d'ici le 5/11/2021, mais ne me sollicitez pas au dernier moment.

Refaire l'interface graphique du TP2/3 de manière ergonomique, en utilisant des composants graphiques issus d'une des bibliothèques graphiques disponibles pour VueJS (vue-material, vuetify, elements, etc.). Je suggère par exemple de mettre un menu sur la gauche, le tableau au centre, etc.
 
Afficher plus d'informations que le nom et la cuisine, par exemple la ville (Borough). Regardez avec la bibliothèque graphique choisie comment afficher un message "aucun restaurant ne correspond à votre recherche" si le nom que vous cherchez n'existe pas.
 
Vous rajouterez un bouton "détails" dans chaque ligne du tableau. Quand on clique dessus, on naviguera vers /RestaurantDetail?id=xxxxxxxxx et on verra le détail du restaurant dont l'id est passé en paramètres. A vous de voir si vous allez refaire un fetch dans la BD pour récupérer à nouveau les détails du restaurant cliqué, ou si vous préférez passer les informations à afficher autrement (sous forme de props ?)
 
Dans le composant RestaurantDetail vous afficherez les informations détaillées sur le restaurant. Une photo (prise au hasard sur le web), une vidéo (optionnel), une carte OpenStreetMap ou GoogleMap avec le restaurant visible dessus (à partir de sa longitude et latitude). A vous de vous débrouiller pour trouver un composant VueJS sur le web qui va vous permettre de faire cela.
 
POUR LES BONS (optionnel pour les autres) : vous créerez des classe CarteDesPlats et Menu qui serviront à générer aléatoirement une carte (hord d'oeuvre, plat du jour, dessert) à partir d'une liste prédéfinie, et à générer des menus de midi et gastronomiques. Les plats auront une photo, une description et un prix. Vous afficherez pour chaque restaurant la carte et les menus à l'aide de composants CarteRestaurant et MenuRestaurant. 
 
POUR LES BONS encore : gestion des commandes à distance. On peut passer une commande : "je prendrai un menu standard et deux plats à la carte : la terrine de poisson et le cassoulet de Castelnaudary". On pourra voir sur la droite le récapitulatif de la commande. Le prix se mettra à jour au fur et à mesure qu'on ajoute des plates (ou qu'on en retire, là-aussi, fonctionnalité optionnelle). La commande = un peu comme un panier sur un site de e-commerce.
 
Ensuite No Limit si vous voulez vous amuser : persistence (plats dans MongoDB -> rajouter requêtes et WebServices), authentification (au programme du M2 avec tokens etc., mais si vous voulez déjà essayer simplement avec collection des utilisateurs dans MongoDB, requêtes et WebServices), faites ce que vous sentez...
