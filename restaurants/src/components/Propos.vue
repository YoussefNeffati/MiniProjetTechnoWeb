<template>
  <div class="propos">
    <!--ajout menu-->
    <div class="menu">
      <md-menu md-direction="bottom-start">
        <md-button md-menu-trigger>
          <md-icon md-theme="green" class="md-primary"> menu </md-icon>
        </md-button>
        <md-menu-content>
          <router-link to="/propos/">
            <md-menu-item>A PROPOS</md-menu-item>
          </router-link>
          <router-link to="/">
            <md-menu-item>ACCUEIL</md-menu-item>
          </router-link>
          <md-menu-item>CONTACTS</md-menu-item>
        </md-menu-content>
      </md-menu>
    </div>
    <div>
      <h1>Mini projet M1 Miage 2021-2022 TECHNOLOGIES Web</h1>
      <p>
        Dans ce mini projet, il est question d'appliquer les notions vues en
        cours
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
}
</style>
