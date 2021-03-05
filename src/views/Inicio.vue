<template>
  <div>
    <div>
      <div class="d-flex justify-content-end mr-5 align-items-center">
        <p class="d-inline-block mr-3 font-weight-bold">Añadir Contacto</p>
        <router-link to="/agregar">
          <b-button variant="primary" class="float-end"
            ><b-icon icon="plus-circle"></b-icon
          ></b-button>
        </router-link>
      </div>
      <b-card-group class="mx-3 mt-3" deck>
        <b-card
          v-for="item in contactos"
          :key="item.id"
          border-variant="primary"
          :header="item.nombre"
          header-bg-variant="primary"
          header-text-variant="white"
          align="center"
        >
          <b-card-text>{{ item.numero }}</b-card-text>
          <router-link :to="{ name: 'Editar', params: { id: item.id } }">
            <b-button class="mb-2" block variant="warning">Editar</b-button>
          </router-link>
          <b-button @click="eliminarContacto(item.id)" block variant="danger" class="px-4">Eliminar</b-button>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>


<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Inicio",
  created() {
    this.getContactos();
  },
  methods: {
    ...mapActions(["getContactos", "eliminarContacto"]),
  },
  computed: {
    ...mapState(["contactos"]),
  },
};
</script>