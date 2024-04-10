<template>
    <div class="container">
        <h2 class="title">All Notes</h2>
        <ul class="notes">
            <li v-for="note in notes" :key="note.id" :note="note.item">
                <RouterLink class="notes-item" :to="{ name: 'EditNote', params: { id: note.id } }">
                    <div class="notes-card">
                        <NoteCard :id="note.item.id" :title="note.item.title" :content="note.item.content"
                            :category="note.item.category" :created_at="note.item.created_at"
                            :updated_at="note.item.updated_at" />
                    </div>
                </RouterLink>
            </li>

            <div class="notes-empty" v-if="notes.length === 0">
                No notes yet.
            </div>

        </ul>
    </div>
</template>

<script>
import NoteCard from '@/components/NoteCard.vue';

export default {
    name: 'NotesList',
    components: {
        NoteCard
    },

    created() {
        // Fetch notes from localStorage
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        console.log(notes);
        // Dispatch an action to commit the notes to the store
        this.$store.commit('setNotes', notes);
    },

    computed: {
        notes() {
            return this.$store.state.notes;
        }
    },
}
</script>

<style lang="scss" scoped>
.title {
    text-align: center;
    margin-bottom: 1rem;
}

.nav-link {
    text-align: center;
    text-decoration: none;
    color: #000;
    cursor: pointer;
}

.notes {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    list-style: none;
    margin-bottom: 40px;

    &-item {
        text-decoration: none;
    }

    &-empty {
        text-align: center;
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin: 0 auto;
    }
}
</style>../components/AddNote.vue