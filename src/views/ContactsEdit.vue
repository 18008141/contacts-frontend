<template>
<div class="container py-5">
  <div class="row">
      <div class="col-12 col-sm-10 col-md-8 mx-auto">
        <h3 class="mb-4">Editar Contacto</h3>
        <form action="">
          <div class="row">
            <div class="col-12 mb-3">
              <input type="text" class="form-control" placeholder="Nombre Completo" aria-label="Nombre">
            </div><!-- /.col -->
            <div class="col col-md-6 mb-3">
              <input type="email" class="form-control" placeholder="Email" aria-label="Email">
            </div><!-- /.col -->
            <div class="col col-md-6 mb-3">
              <input type="phone" class="form-control" placeholder="Teléfono" aria-label="Teléfono">
            </div><!-- /.col -->
            <div class="col-12 mt-3">
              <button class="btn btn-success" type="submit">Crear Contacto</button>
            </div>
          </div><!-- /.row -->
        </form><!-- /form -->
      </div><!-- /.col-12 -->
    </div><!-- /.row -->
</div><!-- /.container -->
</template>

<script>
import axios from 'axios';
// import { onMounted } from 'vue';

//   props: ['id'],
//   data() {
//     return {
//       contact: {
//         name: '',
//         email: '',
//         phone: ''
//       }
//     }
//   },
//   async mounted() {
//     const contact_data = await axios.get(`http://localhost:3000/contact/${this.id}`);
//     if (contact_data.data) {
//       this.contact.name = contact_data.name;
//       this.contact.email = contact_data.email;
//       this.contact.email = contact_data.email;
//     }
//   }
</script>

<style>

</style>