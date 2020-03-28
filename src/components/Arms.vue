<template>
  <div class="hello">
    <div class="uk-section uk-section-small">
      <div class="uk-container-small uk-align-center">
        <h1>{{ msg }}</h1>
        <button class="uk-button arms-button" v-on:click="getArms()">Get Arms!!!</button>
        <hr>
        <div uk-grid>
          <div class="uk-width-1-3@s" v-for="arm in random_arms" :key="arm.name">
            <div class="uk-card uk-card-default">
              <div class="uk-card-media-top">
                <img v-bind:src="arm.image_url" width="100%"><img>
              </div>
              <div class="uk-card-body">
                <h3 class="uk-card-title">{{ arm.name }}</h3>
                <p class="description">{{ arm.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import arms from '../assets/data.json'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'ARMS Randomizer',
      random_arms: []
    }
  },
  methods: {
    getArms: function () {
      this.random_arms = [arms[Math.floor(Math.random() * arms.length)], arms[Math.floor(Math.random() * arms.length)], arms[Math.floor(Math.random() * arms.length)]]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

.arms-button {
  background-color: #000000;
  color: #ffff3e;
  font-weight: 900;
}
</style>
