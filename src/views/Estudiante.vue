<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombres</th>
              <th scope="col">Apellidos</th>
              <th scope="col">Usuario</th>
              <th scope="col">Email</th>
              <th scope="col" />
            </tr>
          </thead>
          <tbody >
            <tr v-for="(estudiante, index) in estudiantes" :key="index">
              <th :style="getClass(`${estudiante.usuario}`)" scope="row">{{index}}</th>  
              <td :style="getClass(`${estudiante.usuario}`)">{{estudiante.nombres}}</td> 
              <td :style="getClass(`${estudiante.usuario}`)">{{estudiante.apellidos}}</td> 
              <td :style="getClass(`${estudiante.usuario}`)">{{estudiante.usuario}}</td>
              <td :style="getClass(`${estudiante.usuario}`)">{{estudiante.email}}</td>
              <td :style="getClass(`${estudiante.usuario}`)"><a href="#">Ver Detalle</a></td>
            </tr>
          </tbody>
        </table>
        <FlashMessage></FlashMessage>      
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "estudiante",
    data() {
      return {
        estudiantes: {},
        usuario: {}
      }
    },
    created() {
      this.estudiantes = this.$func.getEstudiantes();
      this.usuario = this.$parent.usuario;
    },
    methods: {
      getClass(username) {
        if (this.usuario.usuario === username)
          return 'background-color: #20c997;';
        else
          return '';  
      }
    }
  }
</script>
