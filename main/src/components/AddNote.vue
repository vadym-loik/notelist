<template>
    <div>
        <h2 class="title">Add New Note</h2>

        <form class="form" @submit.prevent="handleSubmit">
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
            <button class="form-btn" v-if="isFormValid" type="submit">Create New Note</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'AddNote',
    data() {
        return {
            note: {
                title: '',
                content: '',
                category: 'Personal',
                created_at: '',
                updated_at: '',
            },
        };
    },
    computed: {
        isFormValid() {
            return this.note.title && this.note.content && this.note.category;
        },
    },
    methods: {
        handleSubmit() {
            this.note.created_at = new Date().toLocaleString('fr-FR');
            // this.note.updated_at = new Date().toLocaleDateString('fr-FR');
            this.$store.dispatch('addNote', this.note);
            this.$router.push({ name: 'NoteList' });
            this.resetForm();
        },
        resetForm() {
            this.note = {
                title: '',
                content: '',
                category: 'personal',
                created_at: '',
                updated_at: '',
            };
        },
    },
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
</style>