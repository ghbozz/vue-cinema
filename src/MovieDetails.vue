<template>

  <div class="movie-details">

    <div class="movie-banner"
    v-bind:style="{ 'background-image': 'linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),' + 'url(' + 'https://image.tmdb.org/t/p/original' + movie.backdrop_path + ')' }">
    <a href="#" class="back" @click="$parent.selectedMovie = null"><i class="fas fa-arrow-circle-left"></i></a>
      <div class="container">
        <div class="movie-banner-container">
          <div class="banner-title">
            <h1 class="title movie-title">{{ movie.title }}</h1>
            <span class="tagline">{{ movie.tagline }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="container bottom-container">
      <div class="bottom-wrapper">
        <div class="poster-section">
          <img :src="'https://image.tmdb.org/t/p/w400' + movie.poster_path" alt="" class="movie-poster">
        </div>

        <div class="overview-section">
          <div class="genres mb-10">
            <div>
              <span v-for="genre in movie.genres">{{ genre.name }} / </span>
            </div>
            <div class="companies">
              <div v-for="companie in movie.production_companies">
                <div v-if="companie.logo_path">
                  <img  class="companie" :src="'https://image.tmdb.org/t/p/w1280' + companie.logo_path"  alt="">
                </div>
              </div>
            </div>
          </div>
          <div class="synopsis mb-10">
            <h3 class="mb-10 subtitle"><strong>Synopsis</strong></h3>
            <p>{{ movie.overview }}</p>
          </div>
          <cast :cast="cast"></cast>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
  import Cast from './Cast.vue'
  export default {
    data() {
      return {

      }
    },
    components: {
      'cast': Cast
    },
    props: ['movie', 'cast']
  }
</script>

<style scoped>
  .back {
    position: absolute;
    top: 100px;
    left: 100px;
    font-size: 3em;
    color: rgb(247, 247, 247);
    transition: all 0.3s ease-out;
  }

  .back:hover {
    transform: scale(1.15);
  }

  .movie-details {
    overflow: hidden;
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
    bottom: 75px;
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
    margin-top: 20px;
  }

  .genres {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: -10px;
  }

  .companies {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 150px;
  }

  .synopsis {
    margin-top: -10px;
  }

  .companie {
    width: 100px;
    max-height: 100px;
    padding: 20px;
  }

  .bottom-container {
    height: calc(870px - 400px);
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

  @media screen and (max-width: 767px) {
    .movie-banner {
      display: none;
    }

    .overview-section {
      display: none;
    }

    .bottom-wrapper {
      align-items: center;
      justify-content: center;
    }
  }
</style>
