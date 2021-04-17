<template>
  <form @submit.prevent="handleSubmit">
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
          <base-button class="btn btn-primary w-100" nativeType="submit"> <i class="bi-star"/> Login </base-button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import Vue from 'vue'
import BaseButton from '../../components/BaseButton'
import { mapActions } from 'vuex'
import { ActionTypes } from '@/store/modules/auth/types'

export default Vue.extend({
  name: 'Login',
  components: {
    BaseButton
  },
  data: () => ({
    form: {
      username: '',
      password: ''
    },
    subbimited: false
  }),
  methods: {
    handleSubmit (e) {
      this.login({ username: this.form.username, password: this.form.password })
        .then(() => {
          this.$router.push('/profile')
        })
        .catch(err => {
          console.log(err)
        })
    },
    ...mapActions('auth', [ActionTypes.LOGIN])
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
