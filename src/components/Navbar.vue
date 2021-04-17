<template>
  <div id="nav">
    <router-link class="navbar-brand" :to="{ name: 'Home' }">
      <img src="../assets/logo.png" alt="i3 Tech GreyLogo" width="30" height="30">
    </router-link>
    <router-link to="/">Home</router-link> |
    <router-link to="/profile">Profile</router-link>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'Navbar'

})
</script>
