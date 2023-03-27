<template>
  <div class="d-flex flex-column justify-content-center">
    <IdInput @addedValue="added"/>
    <div id="user" class="d-flex align-items-center justify-content-center">
      <UserCard v-if="existsId === true" :usrId="this.uid"/>
    </div>
  </div>
</template>

<script lang="ts">
import IdInput from "@/components/IdInput.vue";
import UserCard from "@/components/UserCard.vue";
export default {
  name: "RomanNumbers",
  components: {
    IdInput,
    UserCard
  },
  data() {
    return {
      uid: {
        type: String,
        required: true
      },
      existsId: {
        type: Boolean,
        default: false
      }
    }
  },
  methods: {
    added(value:string) {
      console.log(value);
      this.uid = value;
      this.existsId = true;
    }
  }
}

console.log('hello mum');

</script>

<style scoped>

</style>