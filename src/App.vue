<template>
  <div class="d-flex flex-row flex-wrap">
    <ShowData v-for="uid in userIDs" :usrId="uid"/>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import Card from "./components/Card.vue";
import ShowData from "./components/ShowData.vue";


@Options({
  components: {
    Card,
    ShowData,
  },
  data() {
    return {
      userIDs: ['17018032', '17897192', '17671153', '20567165', '15165858', '27067039', '17517577']
    };
  },
})
export default class App extends Vue {
}
</script>

<style></style>
