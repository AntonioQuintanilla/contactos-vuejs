<template>
  <div class="container">
    <div class="row">
      <b-card-group class="col-12 mx-3 mt-3" deck>
        <b-card
          border-variant="primary"
          :header="nombre"
          header-bg-variant="primary"
          header-text-variant="white"
          align="center"
        >
          <b-card-text>{{ numero }}</b-card-text>

          <b-form-input
            class="mb-2"
            v-model="nombre"
            type="text"
          ></b-form-input>
          <b-form-input
            class="mb-2"
            v-model="numero"
            type="text"
          ></b-form-input>
          <b-button
            @click="agregarContacto({nombre, numero})"
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
import { mapActions } from "vuex";
export default {
  name: "Agregar",
  data() {
    return {
      nombre: "",
      numero: "",
    };
  },
  methods: {
    ...mapActions(["agregarContacto"]),
  },
};
</script>