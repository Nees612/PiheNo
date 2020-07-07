<template>
  <div id="app">
    <div class="cover">
      <Contactbar />
      <Navbar />
      <Workshop />
      <!--<WorkshopFeed />-->
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Contactbar from "./components/Contactbar.vue";
import Workshop from "./components/Workshop.vue";
//import WorkshopFeed from './components/WorkshopFeed.vue';

export default {
  name: "App",
  components: {
    Navbar,
    Contactbar,
    Workshop
    //WorkshopFeed
  },
  methods: {}
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");
@import url("https://fonts.googleapis.com/css?family=Proza+Libre");

#app {
  /*font-family: 'Roboto Condensed', sans-serif;*/
  /* font-family: 'Proza Libre', sans-serif; */
  /* font-family: "Source Sans Pro", sans-serif; */
  /* font-family: "Raleway", sans-serif; */
  font-family: "Libre Baskerville", serif;
  font-size: large;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html,
body {
  /*font-family: 'Roboto Condensed', sans-serif;*/
  /* font-family: 'Proza Libre', sans-serif; */
  /* font-family: "Source Sans Pro", sans-serif; */
  /* font-family: "Raleway", sans-serif; */
  font-family: "Libre Baskerville", serif;
  background-size: contain;
  background-image: url("./assets/images/background.png");
  font-size: large;
}

.cover {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.4);
}
</style>
