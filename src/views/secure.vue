<template>
  <div id="secure">
    <span><b>Listado de Estudiantes</b></span>
    <table>
      <thead>
        <tr>
          <th>Nro</th>
          <th>Nombres</th>
          <th>Usuario</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(std, i) in $parent.students" :key="i">
          <th scope="row">{{i}}</th>  
          <td>{{std.Nombres}} {{std.Apellidos}}</td> 
          <td>{{std.Usuario}}</td>
          <td><a href="#">Ver Detalle</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: "secure",
    data() {
      return {};
    }
  }
</script>

<style scoped>
  #secure {
    background-color: #ffffff;
    border: 1px solid #cccccc;
    padding: 20px;
    margin-top: 10px;
  }
</style>