<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-12 col-sm-10 col-md-8 mx-auto">
        <h3 class="mb-4">Contactos</h3>
        <div class="list-group w-auto">
          <a v-for="contact in contacts" :key="contact._id" href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
            <i class="bi bi-person-circle" style="font-size: 2rem;"></i>
            <div class="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 class="mb-0">{{ contact.name }}</h6>
                <p class="mb-0">{{ contact.phone }}</p>
                <a href="mailto:example@mail.com"><p class="mb-0 opacity-75">{{ contact.email }}</p></a>
              </div>
              <div class="actions my-auto">
                <a :href="`tel:${contact.phone}`" class="d-inline-block" title="Call contact">
                  <button class="btn btn-primary"><i class="bi bi-telephone-outbound-fill"></i></button>
                </a>
                <router-link :to="`/edit/${contact._id}`">
                  <button class="btn btn-warning"><i class="bi bi-pencil-square"></i></button>
                </router-link>
                <a @click="deleteContact(contact._id)" class="d-inline-block " title="Delete Contact">
                  <button class="btn btn-danger"><i class="bi bi-person-x-fill"></i></button>
                </a>
              </div>
            </div>
          </a>
        </div><!-- /.list-group -->
      </div><!-- /.col-8 -->`
    </div><!-- /.row -->
  </div><!-- /.container -->
</template>

<script>
  import axios from "axios";
  const backend_url = import.meta.env.VITE_BACKEND_URL;
  export default {
    data () {
      return {
        contacts: []
      };
    },
    async mounted() {
      try {
        const contacts_api = await axios.get('http://localhost:3000/contact/all');
        this.contacts = contacts_api.data;
      } catch (error) {
        console.log(error.message);
      }
    },
    methods: {
      async deleteContact(id) {
        let result = await axios.delete(`http://localhost:3000/contact/delete/${id}`);
        console.log(result);
      }
    }
  } 
</script>

<style>
</style>