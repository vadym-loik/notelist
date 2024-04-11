<template>
    <div class="note">
        <h1 class="note-title">
            {{ title }}
        </h1>
        <p class="note-content">
            {{ content }}
        </p>
        <p class="note-category"> {{ category }}</p>
        <p v-if="updated_at" class="note-createdAt">
            Updated: {{ updated_at }}
        </p>
        <p class="note-createdAt">
            Created: {{ created_at }}
        </p>

    </div>
</template>

<script>
export default {
    name: 'NoteCard',
    props: {
        id: String,
        title: String,
        content: String,
        category: String,
        created_at: String,
        updated_at: [String, undefined],
    },
}
</script>

<style lang="scss" scoped>
.note {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    color: black;
    -webkit-box-shadow: 10px 9px 25px -6px rgba(0, 0, 0, 0.6);
    -moz-box-shadow: 10px 9px 25px -6px rgba(0, 0, 0, 0.6);
    box-shadow: 10px 9px 25px -6px rgba(0, 0, 0, 0.6);


    &-title {
        font-size: 24px;
        font-weight: bold;
        padding: 10px;
    }

    &-content {
        font-size: 20px;
        background-color: antiquewhite;
        border-radius: 5px;
        padding: 10px;
    }

    &-category {
        display: block;
        text-align: center;
        max-width: 80px;
        font-size: 18px;
        background-color: lightblue;
        border-radius: 5px;
        padding: 5px;

    }

    &-createdAt {
        font-size: 16px;
        color: #ccc;
    }
}

@media (min-width: 768px) {
    .note {
        max-width: 250px;
    }
}
</style>