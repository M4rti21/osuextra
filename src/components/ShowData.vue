<template>
  <div class="data">
    <div class="userProfile rounded-5 d-flex flex-row m-5 shadow overflow-hidden" style="width: 800px">
      <img :src="`https://s.ppy.sh/a/` + usrId" alt="pfp" class="object-fit-cover" style="width: 250px; height: 250px"/>
      <div class="stats pt-3 pb-2 ps-3 pe-4 w-100 d-flex flex-column align-content-between">
        <span class="d-flex flex-row align-items-center justify-content-between">
          <span class="d-flex align-items-center gap-2">
            <img :src='"https://flagsapi.com/"+message["country"]+"/flat/64.png"' alt="flag" style="width: 40px; height: 25px" class="rounded object-fit-cover"/>
            <a :href="'https://osu.ppy.sh/users/'+usrId" target="_blank" class="h2 text-decoration-none">{{ message["username"] }}</a></span>
          <h5>lvl {{ Math.round(message["level"]) }}</h5>
        </span>
        <hr class="mt-0 mb-2 mx-0">
        <span class="d-flex flex-row align-items-center justify-content-between"><h4>Global Rank:</h4> <h4> #{{ message["pp_rank"] }}</h4></span>
        <span class="d-flex flex-row align-items-center justify-content-between"><h4>Country Rank:</h4> <h4>#{{ message["pp_country_rank"] }}</h4></span>
        <span class="d-flex flex-row align-items-center justify-content-between"><h5>Performance:</h5> <h5>{{ Math.round(message["pp_raw"]) + "pp" }}</h5></span>
        <span class="d-flex flex-row align-items-center justify-content-between"><h5>Accuracy:</h5><h5>{{ parseFloat(message["accuracy"]).toFixed(2) + "%" }}</h5></span>
        <span class="d-flex flex-row align-items-center justify-content-between"><h6>Playcount:</h6> <h6>{{ message["playcount"] }}</h6></span>
      </div>
    </div>
    <div class="json">

    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: `ShowData`,
  props: {
    usrId: {
      type: String,
      default: "noId",
    },
  },
  data() {
    return {
      message: "awaiting for data...",
    };
  },
  mounted() {
    fetch(
        "https://osu.ppy.sh/api/get_user?k=bb79d0260e2275cf90501fc231830e8a243b2eff&u="+this.usrId+"&m=0")
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          this.message = data[0];
        })
        .catch((error) => {
          console.error("Error: ", error);
        });
  },
};
</script>

<style scoped></style>

<custom>

</custom>
