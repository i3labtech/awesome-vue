<template>
  <div id="app">
    <navbar v-if='showNavbar'/>

    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import Navbar from './components/Navbar'

export default Vue.extend({
  name: 'App',
  components: {
    Navbar
  },
  computed: {
    showNavbar () {
      return this.$route.name !== 'Login'
    }
  }

})
</script>

<style lang="scss">
#app {
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
