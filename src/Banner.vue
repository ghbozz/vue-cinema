<template>
  <section class="hero is-large" style="background-image: linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url('./src/assets/banner-2.jpg');">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Vue Movies
        </h1>
        <h2 class="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed, nesciunt facilis architecto eius id!
        </h2>
        <a class="button is-warning" @click="upComingMovies">Warning</a>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    methods: {
      upComingMovies() {
        this.$parent.getUpcomingMovies();
      }
    }
  }
</script>

<style scoped>
  .hero {
    background-position: center;
  }

  h1, h2 {
    color: white;
  }
</style>
