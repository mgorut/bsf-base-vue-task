<template>
  <div id="secure">
    <table>
      <thead>
        <tr>
          <th>Nro</th>
          <th>Nombres</th>
          <th>Usuario</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(student, i) in this.$parent.students[0]" :key="i">
          <th scope="row">{{i}}</th>  
          <td>{{student.Nombres}} {{student.Apellidos}}</td> 
          <td>{{student.Usuario}}</td> 
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
  };
</script>

<style scoped>
  #secure {
    background-color: #ffffff;
    border: 1px solid #cccccc;
    padding: 20px;
    margin-top: 10px;
  }
</style>