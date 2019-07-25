<template>
  <div class="card column is-paddingless is-one-quarter">
    <img :src="poster" alt="">
  </div>
</template>

<script>
  export default {
    data() {
      return {
        poster: `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`
      }
    },
    props: ['movie']
  }
</script>

<style scoped>
  .card {
    /*border: 1px solid black;*/
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 100%;
    height: 100%;
  }
</style>
