<template>

  <div class="movie-details">

    <div class="movie-banner"
    v-bind:style="{ 'background-image': 'linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),' + 'url(' + 'https://image.tmdb.org/t/p/original' + movie.backdrop_path + ')' }">
      <div class="container">
        <div class="movie-banner-container">
          <div class="banner-title">
            <h1 class="title movie-title">{{ movie.title }}</h1>
            <span class="tagline">{{ movie.tagline }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="bottom-wrapper">
        <div class="poster-section">
          <img :src="'https://image.tmdb.org/t/p/original' + movie.poster_path" alt="" class="movie-poster">
        </div>

        <div class="overview-section">
          <div class="genres mb-20">
            <span v-for="genre in movie.genres">{{ genre.name }} / </span>
          </div>
          <div class="synopsis">
            <h3 class="mb-10">Synopsis</h3>
            <p>{{ movie.overview }}</p>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    data() {
      return {
        poster: `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`,
        backdrop: `https://image.tmdb.org/t/p/w500${this.movie.backdrop_path}`
      }
    },
    props: ['movie']
  }
</script>

<style scoped>
  .movie-details {
    height: 100vh;
    width: 100vw;
  }

  .movie-banner {
    width: 100vw;
    height: 400px;
    background-position: center;
    background-size: cover;
  }

  .banner-title {
    padding-top: 50px;
    text-align: right;
  }

  .movie-banner-container {
    position: relative;
    color: white;
  }

  .movie-title {
    color: white;
    font-size: 3.2em;
  }

  .tagline {
    font-size: 1.8em;
    font-weight: lighter;
  }

  .movie-poster {
    position: absolute;
    bottom: -200px;
    width: 400px;
    border-radius: 10px;
  }

  .bottom-wrapper {
    display: flex;
  }

  .poster-section {
    width: 40%;
  }

  .overview-section {
    width: 60%;
    margin-top: 50px;
  }

  .mb-10 {
    margin-bottom: 10px;
  }

  .mb-20 {
    margin-bottom: 20px;
  }

  .mb-30 {
    margin-bottom: 30px;
  }
</style>
