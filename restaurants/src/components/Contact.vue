<template>
  <div class="propos">
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
    <div>
      <h1>Mini projet M1 Miage 2021-2022 TECHNOLOGIES Web</h1>
      <p>Pour toutes questions, veuillez nous contacter:</p>
      <p>
        NOM: CAMARA<br />
        PRENOM: Mamadou<br />
        EMAIL: mamadou.camara1@etu.univ-cotedazur.fr
      </p>

      <p>
        NOM: NEFFATI<br />
        PRENOM: Youssef<br />
        EMAIL: youssef.neffati@etu.univ-cotedazur.from
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Propos",
  props: {},
  methods: {},
};
</script>
<style scoped>
.menu {
  float: left;
  position: fixed;
  top: 10px;
}
</style>
