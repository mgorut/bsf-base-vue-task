<template>
  <div id="app">
    <div id="nav">
      <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Cerrar Sesión</router-link>
    </div>
    <router-view @authenticated="setAuthenticated" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      authenticated: false,
      students: [
            {Nombres: 'Rigo', Apellidos: 'Paredes', Usuario: 'rparedes', Clave: '111111', email: 'rparedes@belatrixsf.com'},
            {Nombres: 'Peter', Apellidos: 'Vasquez', Usuario: 'pvasquez', Clave: '222222', email: 'pvasquez@belatrixsf.com'},
            {Nombres: 'Elio', Apellidos: 'Navarrete', Usuario: 'enavarrete', Clave: '333333', email: 'enavarrete@belatrixsf.com'},
            {Nombres: 'Gian Carlo', Apellidos: 'Velazque', Usuario: 'gvelazque', Clave: '444444', email: 'gvelazque@belatrixsf.com'}
        ]
    };
  },
  mounted() {
    if (!this.authenticated) {
      this.$router.replace({ name: "login" });
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    }
  }
};
</script>

<style>
body {
  background-color: #f0f0f0;
}
h1 {
  padding: 0;
  margin-top: 0;
}
#app {
  width: 1024px;
  margin: auto;
}
</style>