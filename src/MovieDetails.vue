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
          <img :src="'https://image.tmdb.org/t/p/w400' + movie.poster_path" alt="" class="movie-poster">
        </div>

        <div class="overview-section">
          <div class="genres mb-20">
            <div>
              <span v-for="genre in movie.genres">{{ genre.name }} / </span>
            </div>
            <div class="companies">
              <div v-for="companie in movie.production_companies"><img class="companie" :src="'https://image.tmdb.org/t/p/original' + companie.logo_path"  alt="">
              </div>
            </div>
          </div>
          <div class="synopsis">
            <h3 class="mb-10 subtitle">Synopsis</h3>
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
    box-shadow: 0px 3px 5px rgba(20, 20, 20, 0.3);
  }

  .banner-title {
    padding-top: 200px;
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
    bottom: -100px;
    width: 400px;
    border-radius: 10px;
    box-shadow: 0px 3px 5px rgba(20, 20, 20, 0.3);
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

  .genres {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .companies {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 150px;
  }

  .companie {
    width: 120px;
    padding: 20px;
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
