import { createRouter, createWebHistory } from 'vue-router'
import NoteList from '../views/NoteList.vue'
import EditNote from '../views/EditNote.vue'
import AddNote from '@/views/AddNote.vue'

// Create a new router instance.

const routes = [
  { path: '/', name: 'NoteList', component: NoteList },
  { path: '/add', name: 'AddNote', component: AddNote },
  { path: '/note/:id', name: 'EditNote', component: EditNote, props: true },
  // Redirect any unmatched routes to the NoteList view.
  { path: '/:pathMatch(.*)', redirect: { name: 'NoteList' } }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
