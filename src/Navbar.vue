<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <h1 class="title">Vue-Cinema</h1>
      </a>
    </div>
    <div class="nav-right">
      <a class="button nav-btn" @click="upComingMovies">Upcoming Movies</a>
      <input v-model="query" type="text" class="search" @change="search">
    </div>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        query: ''
      }
    },
    methods: {
      upComingMovies() {
        this.$parent.getUpcomingMovies();
      },
      search() {
        this.$parent.search(this.query);
      }
    }
  }
</script>

<style scoped>
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    background-color: rgba(0, 0, 0, 0);
    padding: 0px 50px;
    height: 100px;
  }

  h1 {
    color: rgba(247, 247, 247, 0.7);
  }

  input {
    border: 1px solid rgba(247, 247, 247, 0.7);
    border-radius: 20px;
    color: rgb(247, 247, 247);
    height: 40px;
    padding-left: 30px;
    width: 300px;
    background-color: rgba(20, 20, 20, 0.3);
    font-size: 1.2em;
    margin-left: 20px;
  }

  .nav-btn {
    padding: 20px 30px;
    border: 1px solid rgba(247, 247, 247, 0.7);
    border-radius: 20px;
    color: rgb(247, 247, 247);
    background-color: rgba(20, 20, 20, 0.3);
  }
</style>
