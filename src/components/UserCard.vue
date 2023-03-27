<template>
  <div class="userCard border">
    <div class="left-panel border-end">
      <div class="d-flex align-items-center justify-content-center img-section">
        <img class="pfp" :src='"https://s.ppy.sh/a/" + message["user_id"] ' alt="pfp"/>
      </div>
      <span class="name-row">
        <a :href="'https://osu.ppy.sh/users/' + usrId" target="_blank"
           class="name mx-auto my-3">{{ message["username"] }}</a>
        <div class="d-flex flex-row gap-2">
        <img class="flag"
             :src='"https://purecatamphetamine.github.io/country-flag-icons/3x2/"+message["country"]+".svg"'
             alt="flag"/>
          <p>lvl {{ Math.floor(parseFloat(message["level"])) }}</p>
          </div>
        </span>
      <hr class="mt-0 mb-2 mx-0">
      <span class="stats-row">
          <p>Global:</p>
          <p> #{{ Intl.NumberFormat('en-US').format(message["pp_rank"]) }}</p>
      </span>
      <span class="stats-row">
          <p>Country:</p>
          <p>#{{ Intl.NumberFormat('en-US').format(message["pp_country_rank"]) }}</p>
        </span>
    </div>
    <div class="right-panel">
      <span class="stats-row">
          <h5>Performance:</h5>
          <h5>{{ Intl.NumberFormat('en-US').format(Math.round(message["pp_raw"])) + "pp" }}</h5>
        </span>
      <span class="stats-row">
          <h5>Accuracy:</h5>
          <h5>{{ parseFloat(message["accuracy"]).toFixed(2) + "%" }}</h5>
      </span>
      <span class="stats-row">
          <h6>Playcount:</h6>
          <h6>{{ Intl.NumberFormat('en-US').format(message["playcount"]) }}</h6>
        </span>
      <span class="stats-row">
          <h6>Plays/Hour:</h6>
          <h6>
            {{
              Intl.NumberFormat('en-US').format(parseFloat(parseInt(message["playcount"]) / (parseInt(message["total_seconds_played"]) / 60 / 60)).toFixed(2))
            }}
          </h6>
        </span>
      <span class="letters-row">
          <div>
            <img src="../assets/x.svg" class="letter" alt="x"
                 data-bs-toggle="tooltip" data-bs-placement="top"
                 data-bs-custom-class="custom-tooltip"
                 data-bs-title="This top tooltip is themed via CSS variables."/>
            <span>
              {{
                Intl.NumberFormat('en-US').format(parseInt(message["count_rank_ss"]) + parseInt(message["count_rank_ssh"]))
              }}
            </span>
          </div>
          <div>
            <img src="../assets/s.svg" class="letter" alt="s"/>
            <span>{{
                Intl.NumberFormat('en-US').format(parseInt(message["count_rank_s"]) + parseInt(message["count_rank_sh"]))
              }}</span>
          </div>
          <div>
            <img src="../assets/a.svg" class="letter" alt="a"/>
            <span>{{ Intl.NumberFormat('en-US').format(parseInt(message["count_rank_a"])) }}</span>
          </div>
        </span>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
export default {
  name: `ShowData`,
  props: {
    usrId: String,
  },
  data() {
    return {
      message: "awaiting for data...",
    };
  },
  async created() {
      const requestOptions = {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST"
        },
        body: "client_id=21248&client_secret=DhLLTFGJIIL4g24FuVAFa3byzTxPAPmBUuspb6H6&grant_type=client_credentials&scope=public"
      };
      const response = await fetch("https://osu.ppy.sh/oauth/token", requestOptions);
      this.message = await response.json();
      console.log(this.message);

    // const url = 'http://localhost:8080/oauth/token';
    // const headers = {
    //
    // };
    // let params = "";
    //
    // const config = {
    //   headers: headers,
    //   body: params
    // }
    // axios.post(url, config).then((response) => this.message = response.data);
    // console.log(this.message);
    // const token = '';
    // const params = {
    //   "key": "porro",
    // };
    // const headers = {
    //   Authorization: `Bearer ${token}`
    // };
    // fetch("https://osu.ppy.sh/api/v2/users/1/osu", {
    //   'mode': 'no-cors',
    //   method: "GET", headers})
    //     .then(response => response.json())
    //     .then(data => (this.message = data))
    //     .catch((error) => {
    //       console.error("Error: ", error);
    //     });
  },
};
</script>

<style scoped>
.userCard {
  margin-top: 3rem;
  width: 800px;
  display: grid;
  grid-template-columns: 200px 600px;
  border-radius: 20px;
}

.left-panel, .right-panel {
  display: flex;
  flex-direction: column;
}

.left-panel {
  width: 200px;
}

.left-panel > .stats-row > p {
  font-size: 17px;
}

.right-panel {
  padding: 20px;
}

.img-section {
  width: 200px;
  height: 200px;
  display: grid;
  place-content: center;
  padding: 20px;
}

.pfp {
  min-width: 150px;
  min-height: 150px;
  object-fit: cover;
  border-radius: 20px;
}

.flag {
  width: 40px;
  height: 30px;
  margin-top: -15px;
  border-radius: 8px;
}

.letter {
  height: 20px;
}

.stats-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  text-align: center;
  padding: 0 10px 0;
}

.name-row {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 1rem;
}

.name {
  margin-right: auto;
  text-decoration: none;
  font-weight: bolder;
  font-size: 1.8rem;
  color: #ffffff;
  line-height: 1.5rem;
  text-align: center;
}

.letters-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  gap: 1.4rem;
}

.letters-row > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
