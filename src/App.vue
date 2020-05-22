<template>
  <div id="app">
    <div id="nav">
      <router-link v-if="autenticado" to="/login" v-on:click.native="logout()" replace>Cerrar Sesión</router-link>
    </div>  
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
