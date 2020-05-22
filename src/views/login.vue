<template>
  <div id="login">
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <h3 class="text-center text-info">Sistema de estudiantes</h3>
      <br>
      <br>
      <div class="container">
          <div id="login-row" class="row justify-content-center align-items-center">
              <div id="login-column" class="col-md-6">
                  <div id="login-box" class="col-md-12">
                      <form id="login-form" class="form" @submit.prevent="onSubmit($event)">
                          <div class="form-group">
                              <label for="username" class="text-info">Nombre de usuario:</label><br>
                              <input type="text" id="username" v-model="usuario.usuario" class="form-control">
                          </div>
                          <div class="form-group">
                              <label for="password" class="text-info">Contraseña:</label><br>
                              <input type="text" id="password" v-model="usuario.clave" class="form-control">
                          </div>
                          <input type="submit" v-on:click="login()" class="btn btn-info btn-md" value="Iniciar Sesión">
                      </form>
                  </div>
              </div>
          </div>
      </div>
    <FlashMessage></FlashMessage>      
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
          usuario: {}
        }
    },
    created() {
      this.usuario = this.$func.usuario();
    },
    methods: {
      onSubmit() {
      },
      login() {
        if (this.usuario.usuario != "" && this.usuario.clave != "") {
          const found = this.$func.login(this.usuario);
          if (found) {
            this.$emit("authorizeEvent", true);
            this.$router.replace({ name: "estudiante" });
            this.$parent.usuario = this.usuario;
          } else {
            this.flashMessage.info({
              title: 'Iniciar Sesión',
              message: 'Las credenciales no aparecen registradas en nuestro sistema!'
            });
          }
        } else {
          this.flashMessage.warning({
            title: 'Iniciar Sesión',
            message: 'Debe suministrar las credenciales para iniciar sesión'
          });
        }  
      }
    }
  }
</script>
