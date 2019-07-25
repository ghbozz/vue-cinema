<template>
  <div class="card column is-paddingless is-one-quarter">
    <div class="flip" :class="{flipped: isActive}" @click="flip">
      <div class="front">
        <img :src="poster" alt="">
      </div>
      <div class="back">
        <h1 class="movie-title">{{ movie.title }}</h1>
        <p>{{ movie.overview }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isActive: false,
        poster: `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`
      }
    },
    methods: {
      flip() {
        this.isActive = !this.isActive
      }
    },
    props: ['movie']
  }
</script>

<style scoped>
  img {
    width: 100%;
    height: 100%;
  }

  .movie-title {
    position: absolute;
    width: 100%;
    bottom: 20%;
    padding: 20px 0px 20px 10%;
    background-color: rgba(40, 40, 40, 0.4);
    color: white;
    font-size: 1.2em;
    font-weight: bold;
  }

  .flip {
    position: relative;
    width: 100%;
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
  }
  .flip > .front {
    transform: rotateY(0deg);
  }
  .flip > .back {
    position: absolute;
    opacity: 0;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
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
    height: 600px;
    /*padding: 1em 2em;*/
    background: #313131;
    /*border-radius: 10px;*/
  }
  .flip > .front p,
  .flip > .back p {
    font-size: 0.9125rem;
    line-height: 160%;
    color: #999;
  }
</style>
