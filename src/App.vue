<template>
  <div id="app">
    <banner></banner>
    <div class="container">
      <div v-if="!selectedMovie" class="movies-list">
        <div class="columns is-multiline is-3 is-variable">
          <movie-card v-for="movie in movies" :movie="movie"></movie-card>
        </div>
      </div>
    </div>
      <div class="v-else">
        <movie-details :movie="selectedMovie"></movie-details>
      </div>
  </div>
</template>

<script>
  import Keys from './config.js'
  import MovieCard from './MovieCard.vue'
  import MovieDetails from './MovieDetails.vue'
  import Banner from './Banner.vue'
  export default {
    data () {
      return {
        movies: [],
        selectedMovie: null
      }
    },
    methods: {
      getUpcomingMovies() {
        this.movies = []
        this.selectedMovie = null
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${Keys.tmdb_key}&language=en-US&page=1`)
          .then(response => response.json())
          .then(data => data.results.forEach((movie => this.movies.push(movie))))
      },
      search(query) {
        this.movies = []
        this.selectedMovie = null
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${Keys.tmdb_key}&language=en-US&query=${query}&page=1&include_adult=false`)
          .then(response => response.json())
          .then(data => data.results.forEach((movie => this.movies.push(movie))))
      },
      selectMovie(id) {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${Keys.tmdb_key}&language=en-US`)
          .then(response => response.json())
          .then(data => this.selectedMovie = data)
      }
    },
    components: {
      'banner': Banner,
      'movie-card': MovieCard,
      'movie-details': MovieDetails
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
