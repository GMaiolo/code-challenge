import Vue from 'vue'
import Vuex from 'vuex'
import Contact from './models/Contact'

const contactsEndpoint = 'https://s3.amazonaws.com/technical-challenge/v3/contacts.json'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    contactsList: []
  },
  mutations: {
    SET_CONTACTS (state, fetchedContacts) {
      state.contactsList = fetchedContacts
    },
    USE_AVATAR_FALLBACK (state, { id, size }) {
      let contact = state.contactsList.find(contact => contact.id === id)
      contact.setAvatarFallback(size)
    },
    TOGGLE_FAVORITE (state, id) {
      let contact = state.contactsList.find(contact => contact.id === id)
      contact.isFavorite = !contact.isFavorite
    }
  },
  actions: {
    updateContactsList ({ commit }) {
      Vue.http.get(contactsEndpoint)
        .then(({ body }) => {
          const contacts = body.map(raw => new Contact(raw))
          commit('SET_CONTACTS', contacts)
        })
        .catch(({ status }) => {
          console.warn(`[${status}] Couldn't fetch contacts.`)
        })
    }
  },
  getters: {
    thereAreContacts ({ contactsList }) {
      return !!contactsList.length
    },
    contacts ({ contactsList }) {
      return contactsList
    },
    contactById ({ contactsList }) {
      return (id) => contactsList.find(contact => contact.id === id)
    },
    favoriteContacts ({ contactsList }) {
      return contactsList
        .filter(contact => contact.isFavorite)
        .sort(sortContactsByName)
    },
    otherContacts ({ contactsList }) {
      return contactsList
        .filter(contact => !contact.isFavorite)
        .sort(sortContactsByName)
    }
  }
})

function sortContactsByName ({ name: n1 }, { name: n2 }) {
  const name1 = n1.toLowerCase()
  const name2 = n2.toLowerCase()
  if (name1 < name2) {
    return -1
  }
  if (name1 > name2) {
    return 1
  }
  return 0
}

export default store
