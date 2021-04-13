<template>
  <form @submit.prevent="onSubmit">
    <div class="login-page">
      <div class="card">
        <div class="card-header">Login</div>
        <div class="card-body">
          <div class="form-group">
            <input type="email" v-model="form.username" class="form-control" placeholder="E-mail" />
          </div>
          <div class="form-group">
            <input type="password" v-model="form.password" class="form-control" placeholder="Password"  />
          </div>
          <button class="btn btn-primary w-100">Login</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'Login',
  data: () => ({
    form: {
      username: '',
      password: ''
    }
  }),
  methods: {
    onSubmit () {
      console.log(this.form)
    }
  }
})
</script>

<style lang="scss" scoped>
.login-page {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card {
  width: 30%;
}
</style>
