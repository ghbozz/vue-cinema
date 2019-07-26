<template>
  <div class="cast-section">
    <div class="team">
      <div class="director">
        <span class="subtitle"><strong>Director</strong></span>
        <div class="columns director-list">
          <div class="column member">
            <img :src="'https://image.tmdb.org/t/p/w185' + cast.crew[0].profile_path" alt="">
          </div>
        </div>
      </div>
      <div class="casting">
        <span class="subtitle"><strong>Cast</strong></span>
        <div class="columns casting-list">
          <div v-for="member in cast.cast.slice(0, 8)" class="member column">
            <div v-if="member.profile_path">
              <img :src="'https://image.tmdb.org/t/p/w185' + member.profile_path" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      logCast() {
        console.log(this.cast)
      }
    },
    props: ['cast']
  }
</script>

<style scoped>
  .team {
    display: flex;
    align-items: center;
  }

  .casting-list {
    border-top: 1px solid rgba(20, 20, 20, 0.1);
  }

  .director-list {
    border-top: 1px solid rgba(20, 20, 20, 0.1);
  }

  .director {
    margin-right: 100px;
  }

  .cast-section {
    position: absolute;
    bottom: 80px;
  }

  .columns {
    margin-top: 10px;
  }

  img {
    border-radius: 50%;
    height: 50px;
    width: 50px;
    object-fit: cover;
    box-shadow: 0px 3px 5px rgba(20, 20, 20, 0.3);
  }
</style>
