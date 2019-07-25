<template>
  <div id="app">
    <banner></banner>
    <div class="container">
      <div class="movies-list">
        <div class="columns is-multiline is-3 is-variable">
          <movie-card v-for="movie in movies" :movie="movie"></movie-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import MovieCard from './MovieCard.vue'
  import Banner from './Banner.vue'
  export default {
    data () {
      return {
        movies: []
      }
    },
    methods: {
      getUpcomingMovies() {
        this.movies = []
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=902f906fbe883d89143b1deafb3ae4fe&language=en-US&page=1`)
          .then(response => response.json())
          .then(data => data.results.forEach((movie => this.movies.push(movie))))
      },
      search(query) {
        this.movies = []
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=902f906fbe883d89143b1deafb3ae4fe&language=en-US&query=${query}&page=1&include_adult=false`)
          .then(response => response.json())
          .then(data => data.results.forEach((movie => this.movies.push(movie))))
          .then(console.log(this.movies))
      }
    },
    components: {
      'banner': Banner,
      'movie-card': MovieCard
    }
  }
</script>

<style lang="scss">
  body {
    background-color: rgb(247, 247, 247);
    margin: 0;
    padding: 0;
  }

  #app {
    width: 100vw;
    min-height: 100vh;
  }

  button {
    margin-bottom: 50px;
  }
</style>
