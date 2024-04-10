<template>
    <div>
        <ul class="notes">
            <li v-for="note in notes" :key="note.id" :note="note.item">
                <RouterLink class="notes-item" :to="{ name: 'EditNote', params: { id: note.id } }">
                    <div class="notes-card">
                        <h1>
                            Title: {{ note.item.title }}
                        </h1>
                        <p>
                            Content: {{ note.item.content }}
                        </p>
                        <p>Category: {{ note.item.category }}</p>
                        <p>
                            Created at: {{ note.item.created_at }}
                        </p>
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
export default {
    name: 'NotesList',

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
.notes {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    align-items: center;
    list-style: none;

    &-item {
        text-decoration: none;
        color: navy;
    }

    &-card {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-width: 100%;
        list-style: none;
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 4px;
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