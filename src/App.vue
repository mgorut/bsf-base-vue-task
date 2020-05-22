<template>
  <div id="app">
    <div v-if="autenticado">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-end">
        <span style="float: right;">
          <router-link v-if="autenticado" to="/login" v-on:click.native="logout()" replace>Cerrar Sesión</router-link>
        </span>
      </nav>
    </div>
    <div v-else></div>
    <router-view @authorizeEvent="authorize" />
  </div>  
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        autenticado: false,
        usuario: {}
      }
    },
    mounted() {
      if (!this.autenticado) {
        this.$router.replace({ name: "login" });
      }
    },
    methods: {
      authorize(status) {
        this.autenticado = status;
        this.flashMessage.info({
          title: 'Sistema de estudiantes',
          message: 'Bienvenido(a) al sistema'
        });
      },
      logout() {
        this.autenticado = false;
      }
    }
  }
</script>
