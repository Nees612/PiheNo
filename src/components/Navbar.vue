<template>
  <nav class="navbar navbar-expand-md navbar-light">
    <a class="navbar-brand ml-3 mr-3" href="#">
      <img src="../assets/images/logo.png" height="50" width="135" />
    </a>
    <div class="item-container w-100">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">
            Kezdőlap
            <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Galéria</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Workshopok</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">PiheNő</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Workshop2</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Workshop3</a>
          </div>
        </li>
      </ul>
    </div>
    <button
      type="button"
      class="btn btn-outline-success subscribe-btn"
      v-on:click="openSignUp"
    >JELENTKEZEM</button>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  components: {},
  methods: {
    openSignUp: function() {
      this.$eventBus.$emit("open-signUp");
    }
  }
};
</script>

<style scoped>
nav {
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0px 15px 21px rgba(0, 0, 0, 0.5);
  /*background-color: #FCCFDE;*/
  background-color: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: 0px 15px 25px 0px rgba(0, 0, 0, 0.4) inset;
}

.subscribe-btn {
  width: 280px;
}
</style>