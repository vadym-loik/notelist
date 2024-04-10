<template>
    <div class="container">
        <h2 class="title">All Notes</h2>

        <div class="search-bar">
            <p>Search by category:</p>
            <select v-model="search" placeholder="Search by category">
                <option value="" selected>All</option>
                <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
            </select>
        </div>


        <ul class="notes">
            <li v-for="note in filteredCategory" :key="note.id" :note="note.item">
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

    data() {
        return {
            notes: [],
            search: '',
            categories: []
        }
    },

    created() {
        // Fetch notes from localStorage
        const notes = JSON.parse(localStorage.getItem('notes')) || [];

        // Dispatch an action to commit the notes to the store
        this.$store.commit('setNotes', notes);
        this.notes = this.$store.state.notes;
        console.log(this.notes);

        // Get unique categories from notes
        this.categories = [...new Set(this.notes.map(note => note.item.category))];
    },

    computed: {
        filteredCategory: function () {
            if (this.search === '') {
                return this.notes;
            } else {
                return this.notes.filter((note) => { return note.item.category === this.search; })
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.title {
    text-align: center;
    margin-bottom: 1rem;
}

.search-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    gap: 1rem;
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
</style>