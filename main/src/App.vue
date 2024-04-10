<template>
  <div class="container">

    <header class="header">
      <h1 class="title">{{ title }}</h1>
      <nav class="nav" id="nav">
        <RouterLink class="nav-link" :to="{ name: 'NoteList' }">All Notes</RouterLink>
        <RouterLink class="nav-link" :to="{ name: 'AddNote' }">Add New Note</RouterLink>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>

    <!-- <footer>
      <p class="footer">Copyright 2024</p>
    </footer> -->
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'


export default {
  name: 'App',
  components: {
    RouterLink,
    RouterView
  },
  data() {
    return {
      title: 'Notes List',
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 1280px;
  margin: 0 auto;
}

.header {
  text-align: center;
  margin: 2rem 0;
}

.title {
  text-align: center;
  margin-bottom: 2rem;
}

.main {
  margin-bottom: 2rem;
}

.nav {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  &-link {
    text-decoration: none;
    color: #000;
    cursor: pointer;
  }

  &-link:hover {
    text-decoration: underline;
    color: #777;
  }
}

#nav a.router-link-exact-active {
  color: #42b983;
}


.footer {
  text-align: center;
  margin-top: 2rem;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  background-color: #ccc;
}
</style>
