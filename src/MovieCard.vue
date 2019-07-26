<template>
  <div class="column is-one-quarter">
    <div class="flip"
         :class="{flipped: isActive}"
         @click="flip"
         >
      <div class="front">
        <img :src="poster" alt="" class="poster-img">
      </div>
      <div class="back">
        <img :src="backdrop" alt="" class="backdrop-img">
        <div class="inner-card-container">
          <div class="title-and-rating">
            <span class="movie-rating">{{ movie.vote_average }}</span>
            <span class="movie-title">{{ movie.title }}</span>
          </div>
          <span class="release-date">{{ movie.release_date.split('-')[0] }}</span>date
          <div class="synopsis">
            <h1 class="subtitle">Synopsis</h1>
            <p>{{ movie.overview }}</p>
          </div>
          <a @click="selectMovie">Learn more</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isActive: false,
        poster: `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`,
        backdrop: `https://image.tmdb.org/t/p/w500${this.movie.backdrop_path}`
      }
    },
    methods: {
      flip() {
        this.isActive = !this.isActive
      },
      selectMovie() {
        this.$parent.selectMovie(this.movie.id)
        this.$parent.getCast(this.movie.id)
      }
    },
    props: ['movie']
  }
</script>

<style scoped>
  .poster-img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  .backdrop-img {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    box-shadow: 0px 3px 5px rgba(20, 20, 20, 0.3);
  }

  .title-and-rating {
    color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0px;
  }

  .movie-title {
    text-align: right;
    padding-left: 30px;
  }

  .movie-rating {
    text-align: left;
  }

  .release-date {
    color: black;
    margin-bottom: 30px
  }

  .flip {
    cursor: pointer;
    border-radius: 10px;
    position: relative;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-out;
  }

  .flip:hover {
    z-index: 1;
    transform: scale(1.05);
  }

  .flip > .front,
  .flip > .back {
    display: block;
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition-duration: .5s;
    transition-property: transform, opacity;
    border-radius: 10px;
  }
  .flip > .front {
    height: 100%;
    transform: rotateY(0deg);
    box-shadow: 0px 3px 5px rgba(20, 20, 20, 0.3);
  }
  .flip > .back {
    overflow: scroll;
    position: absolute;
    opacity: 0;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    transform: rotateY(-180deg);
  }
  .flipped > .front {
    transform: rotateY(180deg);
  }
  .flipped > .back {
    opacity: 1;
    transform: rotateY(0deg);
  }
  .flip.flip-vertical > .back {
    transform: rotateX(-180deg);
  }
  .flipped.flip-vertical > .front {
    transform: rotateX(180deg);
  }
  .flipped.flip-vertical > .back {
    transform: rotateX(0deg);
  }

  .flip {
    /*position: relative;*/
    /*display: inline-block;*/
  }
  .flip > .front,
  .flip > .back {
    display: block;
    color: white;
    width: inherit;
    background-size: cover !important;
    background-position: top !important;
    /*height: 600px;*/
    /*padding: 1em 2em;*/
    background: white;
    /*border-radius: 10px;*/
  }
  .flip > .front p,
  .flip > .back p {
    font-size: 0.9125rem;
    line-height: 160%;
    color: #999;
  }

  .inner-card-container {
    padding: 30px;
  }

  .synopsis {
    margin-top: 20px;
  }
</style>
