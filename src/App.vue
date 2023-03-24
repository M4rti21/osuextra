<template>
  <div class="d-flex flex-row flex-wrap justify-content-center" id="body">
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
      userIDs: ['17018032', '17897192', '20567165', '27067039', '13241373', '17517577', '17671153', '15165858']
    };
  },
})
export default class App extends Vue {
}
</script>

<style>
#body {
  background-image: url('assets/bg.jpg');
  background-size: cover;
  background-position: center;
}
</style>
