<template>
  <div>
    <div class="container">
      <br />
      <div class="row justify-content-center">
        <div class="col-md">
          <table id="dtBasicExample" class="table">
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
            <tbody>
              <tr v-for="est in filtrados" :key="est.id">
                <th :style="getStyle(`${est.usuario}`)" scope="row">{{est.id}}</th>
                <td :style="getStyle(`${est.usuario}`)">{{est.nombres}}</td>
                <td :style="getStyle(`${est.usuario}`)">{{est.apellidos}}</td>
                <td :style="getStyle(`${est.usuario}`)">{{est.usuario}}</td>
                <td :style="getStyle(`${est.usuario}`)">{{est.email}}</td>
                <td :style="getStyle(`${est.usuario}`)">
                  <button type="button" class="btn btn-primary" @click="verDetalle(est)">
                    Ver detalle
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="row">
            <div class="pager col-md-12 center">
              <button @click="paginate('back')" :disabled="start <= 0">&lt;</button>&nbsp;
              <button @click="paginate('next')" :disabled="limit >= total">&gt;</button>
            </div>
          </div>
          <FlashMessage></FlashMessage>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  name: "estudiante",
  data() {
    return {
      filtrados: {},
      estudiantes: {},
      usuario: {},
      start: 0,
      limit: 5,
      pageSize: 5,
      total: 20
    };
  },
  created() {
    this.usuario = this.$parent.usuario;
    this.estudiantes = this.$func.getEstudiantes();
    this.filtrados = this.estudiantes.slice(0, this.pageSize);
  },
  methods: {
    getStyle(username) {
      if (this.usuario.usuario === username)
        return "background-color: #20c997;";
      else return "";
    },
    paginate: function(direction) {
      if (direction === 'next') {
        this.start += parseInt(this.pageSize);
        this.limit += parseInt(this.pageSize);
      } else if (direction === 'back') {
        this.start -= parseInt(this.pageSize);
        this.limit -= parseInt(this.pageSize);
      }
      this.filtrados = this.estudiantes.slice(this.start, this.limit);
    },
    verDetalle(est) {
      var message = this.$func.verDetalle('Detalle del estudiante', est);
      // muestra un mensaje de del detalle del usuario
      this.flashMessage.show({
          status: 'info',
          html: message,
          clickable: true,
          time: 10000,
          blockClass: 'custom_msg'
      });
    }
  }
}
</script>

<style>
  .pager button {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 15px;
    color: #337ab7;
    padding: 7px 13px;
    text-align: center;
  }

  .pager button:hover {
    background: #eee;
    cursor: pointer;
    outline: none;
  }

  .pager button:disabled {
    background: #eee;
    color: #bbb;
  }
</style>
