<template>
    <div v-if="note">
        <form v-if="editing" class="form" @submit.prevent="updateNote">
            <h2 class="title">Edit Note</h2>
            <div class="form-title">
                <label for="title">Title:</label>
                <input type="text" id="title" v-model="note.title" required />
            </div>
            <div class="form-content">
                <label for="content">Content:</label>
                <textarea id="content" v-model="note.content" required></textarea>
            </div>
            <div class="form-wrap">
                <fieldset class="form-category" id="category" required>
                    <label value="">Select a category: </label>
                    <label for="personal">Personal </label>
                    <input v-model="note.category" type="radio" value="Personal" checked name="category"
                        id="personal" />
                    <label for="work">Work </label>
                    <input v-model="note.category" type="radio" value="Work" name="category" id="work" />
                    <label for="study">Study </label>
                    <input v-model="note.category" type="radio" value="Study" name="category" id="study" />
                </fieldset>
            </div>
            <div class="buttons">
                <button class="buttons-update" type="submit">Update</button>
                <button class="buttons-delete" @click="deleteNote">Delete</button>
                <button @click="toggle">Cancel</button>
            </div>
        </form>

        <NoteCard class="note-card" v-else :id="note.id" :title="note.title" :content="note.content"
            :category="note.category" :created_at="note.created_at" :updated_at="note.updated_at" />

        <button class="edit-btn" v-if="!editing" @click="toggle">Edit Note</button>

    </div>
</template>

<script>
import NoteCard from '../components/NoteCard.vue'

export default {
    name: 'EditNote',
    components: {
        NoteCard,
    },
    props: ['id'],
    data() {
        return {
            editing: false,
            note: this.$store.getters.getNoteById(this.$props.id)?.item
        }
    },
    beforeCreate() {
        this.$store.getters.getNoteById(this.$props.id) ?? this.$router.push({ name: 'NoteList' })
    },

    computed: {
        computedNote() {
            // console.log(this.$store.getters.getNoteById(this.$props.id).item);
            return this.$store.getters.getNoteById(this.$props.id)?.item;
        }
    },
    methods: {
        toggle() {
            this.editing = !this.editing
        },

        deleteNote() {
            if (window.confirm('Are you sure you want to delete this note?')) {
                this.$store.dispatch('deleteNote', this.$props.id)
                this.$router.push({ name: 'NoteList' })
            }
        },
        updateNote() {
            this.note.updated_at = new Date().toLocaleString('fr-FR');
            this.$store.dispatch('editNote', { itemId: this.$props.id, updatedNote: { item: this.note, id: this.$props.id } })
            // this.$router.push({ name: 'NoteList' })
            this.toggle()
        }
    }
};
</script>

<style lang="scss" scoped>
.title {
    text-align: center;
    margin-bottom: 1rem;
}

.form {
    max-width: 500px;
    margin: 0 auto 2rem;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;

    &-title {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;

        input {
            max-width: 100%;
            padding: 5px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
    }

    &-content {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;

        textarea {
            max-width: 100%;
            height: 100px;
            padding: 5px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
    }

    &-category {
        display: flex;
        gap: 10px;
        border: none;
        margin-bottom: 1rem;
    }

    &-btn {
        display: block;
        width: 100%;
        padding: 10px;
        border: none;
        border-radius: 5px;
        background-color: #007bff;
        color: #fff;
        cursor: pointer;
    }
}

.note-card {
    margin-bottom: 15px;
}

.buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    &>button {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        cursor: pointer;
    }

    &-update {
        background-color: #00ff00;
    }

    &-delete {
        background-color: #ff0000;
    }
}

.edit-btn {
    text-decoration: none;
    color: #000;
    border: #777 1px solid;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    cursor: pointer;
    margin-bottom: 20px;
}
</style>