<template>
  <div class="container">
    <div class="row">
      <b-card-group class="col-12 mx-3 mt-3" deck>
        <b-card
          border-variant="primary"
          :header="contacto.nombre"
          header-bg-variant="primary"
          header-text-variant="white"
          align="center"
        >
          <b-card-text>{{ contacto.numero }}</b-card-text>
          <b-form-input
            class="mb-2"
            v-model="contacto.nombre"
            type="text"
          ></b-form-input>
          <b-form-input
            class="mb-2"
            v-model="contacto.numero"
            type="text"
          ></b-form-input>
          <b-button
            @click="editarContacto(contacto)"
            class="mb-2"
            block
            variant="success"
            >Guardar</b-button
          >
          <router-link :to="{ name: 'Inicio' }">
            <b-button block variant="danger" class="px-4">Cancelar</b-button>
          </router-link>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Editar",
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  created() {
    this.getContacto(this.id);
  },
  methods: {
    ...mapActions(["getContacto", "editarContacto"]),
  },
  computed: {
    ...mapState(["contacto"]),
  },
};
</script>