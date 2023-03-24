<template>
  <div class="card">
    <img :src="imgSrc" alt="pfp" />
  </div>
</template>

<script lang="ts">
export default {
  name: `Card`,
  props: {
    imgSrc: {
      type: String,
      default: "https://osu.ppy.sh/images/layout/avatar-guest.png",
      required: true,
    },
  },
};
</script>

<style scoped></style>

<custom>
      
  </custom>
