<template>
  <div id="login">
    <span>Usuario</span>
    <input type="text" name="username" v-model="input.username" placeholder="Digite el nombre de usuario" />
    <br/>
    <span>Contraseña</span>
    <input type="password" name="password" v-model="input.password" placeholder="Digite la contraseña" />
    <br/>
    <button type="button" v-on:click="login(input.username, input.password)">Iniciar Sesión</button>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        input: {
          username: "",
          password: ""
        }
      };
    },
    methods: {
      login(username, password) {
        if (username != "" && password != "") {
          var students = this.$parent.students;
          for (var index = 0; index < students.length; index++) {
            if (   username == students[index].Usuario 
                && password == students[index].Clave) {
              this.$emit("authenticated", true);
              this.$router.replace({ name: "student" });
            } else {
              // console.log("The username and / or password is incorrect");
            }
          }
        } else {
          // console.log("A username and password must be present");
        }
      }
    }
  };
</script>

<style scoped>
  #login {
    width: 500px;
    background: rgb(182, 215, 168);
    border-radius: 10px;
    overflow: hidden;
    padding: 0 0 15px 15px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
  }
  span {
    font-family: Poppins-Regular;
    font-size: 14px;
    color: #333333;
    line-height: 1.5;
    padding-left: 5px;
    text-align: left;
  }
  input {
    font-family: Poppins-Medium;
    font-size: 16px;
    color: #333333;
    line-height: 1.2;
    display: block;
    width: 450px;
    height: 30px;
    background: rgb(255, 255, 255);
    padding-left: 5px;
  }
</style>