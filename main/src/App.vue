<template>
  <div class="container">

    <header class="header">
      <div class="header-nav">
        <div class="header-wrap">
          <RouterLink class="header-wrap__link" :to="{ name: 'NoteList' }">
            <h1 class="title">{{ title }}</h1>
          </RouterLink>
          <LucideNotebookPen />
        </div>

        <nav class="nav" id="nav">
          <RouterLink class="nav-link" :to="{ name: 'NoteList' }">All Notes</RouterLink>
          <RouterLink class="nav-link" :to="{ name: 'AddNote' }">Add New Note</RouterLink>
        </nav>

      </div>
    </header>

    <main>
      <RouterView />
    </main>

    <!-- <footer class="footer" id="footer">
      <p>Copyright 2024</p>
    </footer> -->
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
import LucideNotebookPen from './components/LucideNotebookPen.vue';


export default {
  name: 'App',
  components: {
    RouterLink,
    RouterView,
    LucideNotebookPen,

  },
  data() {
    return {
      title: 'Notes List App',
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 1100px;
  margin: 0 auto;
}

.header {
  margin: 2rem 0;

  &-wrap {
    display: flex;
    gap: 1rem;
    align-items: center;

  }

  &-wrap__link {
    text-decoration: none;
    color: #000;
  }

  &-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.title {
  text-align: center;

}

.main {
  margin-bottom: 2rem;
}

.nav {
  display: flex;
  gap: 1rem;
  align-items: center;


  &-link {
    text-decoration: none;
    color: #000;
    border: #777 1px solid;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    cursor: pointer;
  }

  &-link:hover {
    color: aliceblue;
    background-color: #42b983;
    transition: all 0.3s ease-in-out;
  }
}

#nav a.router-link-exact-active {
  background-color: #42b983;
  color: #fff;
}
</style>
