import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '../firebase/firebase'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contactos: [],
    contacto: {
      nombre: '',
      numero: '',
      id: ''
    }
  },
  mutations: {
    setContactos(state, payload) {
      state.contactos = payload
    },
    setContacto(state, payload) {
      state.contacto = payload
    },
    setEliminarContacto(state, payload) {
      state.contactos = state.contactos.filter(item => item.id !== payload)
    }
  },
  actions: {
    getContactos({ commit }) {
      const contactos = []
      db.collection('contactos').get()
        .then(res => {
          res.forEach(doc => {
            let contacto = doc.data()
            contacto.id = doc.id
            contactos.push(contacto)
          })
          commit('setContactos', contactos)
        })
    },
    getContacto({ commit }, idContacto) {
      db.collection('contactos').doc(idContacto).get()
        .then(doc => {
          let contacto = doc.data()
          contacto.id = doc.id
          commit('setContacto', contacto)
        })
    },
    editarContacto({ commit }, contacto) {
      db.collection('contactos').doc(contacto.id).update({
        nombre: contacto.nombre,
        numero: contacto.numero
      })
        .then(() => {
          console.log('tarea editada')
          router.push('/')
        })
    },
    agregarContacto({ commit }, contacto) {
      db.collection('contactos').add({
        nombre: contacto.nombre,
        numero: contacto.numero
      })
        .then(doc => {
          console.log('Contacto agregado')
          router.push('/')
        })
    },
    eliminarContacto({ commit }, idContacto) {
      db.collection('contactos').doc(idContacto).delete()
      .then(() => {
        console.log('Contacto eliminado')
        commit('setEliminarContacto', idContacto)
      })
    }
  },
  modules: {
  }
})
