<template>
    <form class="form" @submit.prevent="handleSubmit">
        <div class="form-title">
            <label for="title">Title:</label>
            <input type="text" id="title" v-model="note.title" required />
        </div>
        <div class="form-content">
            <label for="content">Content:</label>
            <textarea id="content" v-model="note.content" required></textarea>
        </div>
        <div class="form-category">
            <label for="category">Category:</label>
            <select id="category" v-model="note.category" required>
                <option value="">Select a category</option>
                <option value="personal">Personal</option>
                <option value="work">Work</option>
                <option value="study">Study</option>
            </select>
        </div>
        <button class="form-btn" v-if="isFormValid" type="submit">Create New Note</button>
    </form>
</template>

<script>
export default {
    name: 'AddNote',
    data() {
        return {
            note: {
                title: '',
                content: '',
                category: '',
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
            this.note.created_at = new Date().toISOString();
            this.note.updated_at = new Date().toISOString();
            this.$store.dispatch('addNote', this.note);
            this.resetForm();
        },
        resetForm() {
            this.note = {
                title: '',
                content: '',
                category: '',
                created_at: '',
                updated_at: '',
            };
        },
    },
};
</script>

<style lang="scss" scoped>
.form {
    width: 500px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;

    &-title {
        margin-bottom: 10px;

        label {
            display: block;
        }

        input {
            width: 100%;
            padding: 5px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
    }

    &-content {
        margin-bottom: 10px;

        label {
            display: block;
        }

        textarea {
            width: 100%;
            height: 100px;
            padding: 5px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
    }

    &-category {
        margin-bottom: 10px;
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