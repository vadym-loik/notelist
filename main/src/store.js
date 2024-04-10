import { createStore } from 'vuex'

const store = createStore({
  state: {
    notes: [
      // {
      //   id: 1,
      //   title: 'first task',
      //   content: 'first task content',
      //   category: 'work',
      //   created_at: '2022-01-01',
      //   updated_at: '2022-01-01'
      // },
      // {
      //   id: 2,
      //   title: 'second task',
      //   content: 'second task content',
      //   category: 'personal',
      //   created_at: '2022-01-02',
      //   updated_at: '2022-01-02'
      // },
      // {
      //   id: 3,
      //   title: 'third task',
      //   content: 'third task content',
      //   category: 'work',
      //   created_at: '2022-01-03',
      //   updated_at: '2022-01-03'
      // }
    ],
    id: 0
  },
  mutations: {
    addNote(state, item) {
      state.notes.push({ item, id: state.id++ })

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
    getNoteById: (state) => (itemId) => state.notes.find((note) => note.id === itemId)
  }
})

export default store
