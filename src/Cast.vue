<template>
  <div class="cast-section">
    <div class="team">
      <div class="director">
        <span class="subtitle"><strong>Director</strong></span>
        <div class="columns director-list">
          <div class="column member picture-n-name">
            <img :src="'https://image.tmdb.org/t/p/w185' + cast.crew[0].profile_path" alt="">
            <span class="crew-name">{{ cast.crew[0].name }}</span>
          </div>
        </div>
      </div>
      <div class="casting">
        <span class="subtitle"><strong>Cast</strong></span>
        <div class="columns casting-list">
          <div v-for="member in cast.cast.slice(0, 8)" class="member column">
            <div v-if="member.profile_path" class="picture-n-name">
              <img :src="'https://image.tmdb.org/t/p/w185' + member.profile_path" alt="">
              <span class="crew-name">{{ member.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
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

  .picture-n-name {
    position: relative;
  }

  .picture-n-name:hover .crew-name {
    opacity: 1;
  }

  .crew-name {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: rgb(5, 6, 19);
    padding: 5px;
    border-radius: 3px;
    opacity: 0;
    width: 170px;
    text-align: center;
    position: absolute;
    transform: translateX(-50%);
    bottom: -75%;
    left: 50%;
    transition: all .3s ease-out;
  }
</style>
