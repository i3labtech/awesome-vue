<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Profile</h3>
          </div>
          <div class="card-body table-responsive p-2">
            <div class="container">
              <form @submit.prevent="handleSubmit">

                <base-input label="Name" :value="form.name" :required="true" type="input"/>

                <base-input label="Email address" :value="form.email" :required="true"
                  type="email"  placeholder="Enter email" helper="just edit in this field to change your current email in account"/>

                <base-input label="Old Password" :value="form.oldPassword" :required="true" type="password"
                  placeholder="enter a old password account" helper="just fill in this field to change your current password" />

                <base-input label="New Password" :value="form.newPassword" :required="true" type="password"
                  placeholder="enter a new password account" helper="just fill in this field to change your current password" />

                <button class="btn btn-success" type="submit">
                  <i class="bi bi-save"></i>  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import BaseInput from '@/components/BaseInput.vue'

export default Vue.extend({
  components: { BaseInput },
  name: 'Profile',
  data: () => ({
    form: {
      name: 'JC',
      email: 'jc.bombardelli@live.com',
      oldPassword: '',
      newPassword: ''
    }
  }),
  methods: {
    handleSubmit () {
      console.log('submit')
    }
  }
})
</script>
