import { createStore } from 'vuex'
import randomId from './composables/randomId'

const store = createStore({
  state: {
    notes: localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : [],
    id: 0
  },
  mutations: {
    addNote(state, item) {
      state.notes.unshift({
        item,
        id: randomId()
      })

      // Store the note in localStorage
      localStorage.setItem('notes', JSON.stringify(state.notes))
    },
    editNote(state, { itemId, updatedNote }) {
      const index = state.notes.findIndex((note) => note.id === itemId)
      state.notes.splice(index, 1, updatedNote)

      // Store the updated note in localStorage
      localStorage.setItem('notes', JSON.stringify(state.notes))
    },
    deleteNote(state, itemId) {
      state.notes = state.notes.filter((note) => note.id !== itemId)

      // Store the updated notes in localStorage
      localStorage.setItem('notes', JSON.stringify(state.notes))
    },
    setNotes(state, notes) {
      state.notes = notes
    }
  },
  actions: {
    addNote({ commit }, item) {
      // Make an API call to add the note to the database
      commit('addNote', item)
    },
    editNote({ commit }, { itemId, updatedNote }) {
      // Make an API call to edit the note in the database
      commit('editNote', { itemId, updatedNote })
    },
    deleteNote({ commit }, itemId) {
      // Make an API call to delete the note from the database
      commit('deleteNote', itemId)
    }
  },
  getters: {
    getAllNotes: (state) => state.notes,
    getNoteById: (state) => (id) => {
      return state.notes.find((note) => note.id === id)
    }
  }
})

export default store
