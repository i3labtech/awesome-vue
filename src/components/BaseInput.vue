<template>
  <div class="form-group">
    <label :for="id">{{label}}</label>
    <input class="form-control" :value="value"
      :type="type" :id="id" :placeholder="placeholder ? placeholder : label"
    />
    <small v-if="helper" class="form-text text-muted">  {{helper}} </small>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'BaseInput',
  props: {
    required: Boolean,
    id: String,
    label: String,
    type: String,
    helper: String,
    placeholder: String,
    value: String
  }
})
</script>

<style></style>
