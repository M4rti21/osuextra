<template>
  <div class="d-flex flex-column">
    <div class="input-group mt-5 mx-auto" style="width: 400px">
      <span class="input-group-text" id="basic-addon1">Id | Username</span>
      <input v-model="val" type="text" class="form-control">
    </div>
    <button class="btn btn-primary mt-3 mx-auto" @click="emitMethod"><i class="bi bi-search"></i> Search</button>
  </div>
</template>

<script>
export default {
  name: "IdInput",
  data() {
    return {
      val: ''
    }
  },
  methods: {
    emitMethod() {
      this.$emit('addedValue', this.val);
    }
  }
}
</script>

<style scoped>

</style>