<template>
    <div class="wrapper">
        <div class="background-image" :style="'background-image: url(' + usr_data['cover_url'] +')'"></div>
        <div class="userCard border" v-if="Object.keys(usr_data).length > 1">
            <div class="left-panel border-end">
                <div class="d-flex align-items-center justify-content-center img-section">
                    <img class="pfp" :src='usr_data["avatar_url"]' alt="pfp"/>
                </div>
                <span class="name-row">
        <a :href="'https://osu.ppy.sh/users/' + usr_data" target="_blank"
           class="name mx-auto my-3">{{ this.usr_data["username"] }}</a>
        <div class="d-flex flex-row gap-2">
        <img class="flag"
             :src='"https://purecatamphetamine.github.io/country-flag-icons/3x2/"+this.usr_data["country_code"]+".svg"'
             alt="flag"/>
          <span>lvl {{ Math.floor(parseFloat(this.usr_data["level"])) }}</span>
          </div>
        </span>
                <hr class="mt-0 mb-2 mx-0">
                <span class="stats-row">
          <span>Global:</span>
          <span> #{{ Intl.NumberFormat('en-US').format(this.usr_data["pp_rank"]) }}</span>
      </span>
                <span class="stats-row">
          <span>Country:</span>
          <span>#{{ Intl.NumberFormat('en-US').format(this.usr_data["pp_country_rank"]) }}</span>
        </span>
            </div>
            <div class="right-panel">
      <span class="stats-row">
          <h5>Performance:</h5>
          <h5>{{ Intl.NumberFormat('en-US').format(Math.round(this.usr_data["pp_raw"])) + "pp" }}</h5>
        </span>
                <span class="stats-row">
          <h5>Accuracy:</h5>
          <h5>{{ parseFloat(this.usr_data["accuracy"]).toFixed(2) + "%" }}</h5>
      </span>
                <span class="stats-row">
          <h6>Playcount:</h6>
          <h6>{{ Intl.NumberFormat('en-US').format(this.usr_data["playcount"]) }}</h6>
        </span>
                <span class="stats-row">
          <h6>Plays/Hour:</h6>
          <h6>
            {{
              Intl.NumberFormat('en-US').format(parseFloat(parseInt(this.usr_data["playcount"]) / (parseInt(this.usr_data["total_seconds_played"]) / 60 / 60)).toFixed(2))
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
                Intl.NumberFormat('en-US').format(parseInt(this.usr_data["count_rank_ss"]) + parseInt(this.usr_data["count_rank_ssh"]))
                }}
            </span>
          </div>
          <div>
            <img src="../assets/s.svg" class="letter" alt="s"/>
            <span>{{
                Intl.NumberFormat('en-US').format(parseInt(this.usr_data["count_rank_s"]) + parseInt(this.usr_data["count_rank_sh"]))
                }}</span>
          </div>
          <div>
            <img src="../assets/a.svg" class="letter" alt="a"/>
            <span>{{ Intl.NumberFormat('en-US').format(parseInt(usr_data["count_rank_a"])) }}</span>
          </div>
        </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserCard',
    props: {
        usr_data: {
            type: Object,
            required: true
        },
    }
};
</script>

<style scoped>
.wrapper {
  position: relative;
    margin-top: 3rem;
    width: 800px;
    height: 500px;
}
.userCard {
    width: 800px;
    height: 500px;
    display: grid;
    grid-template-columns: 200px 600px;
    border-radius: 20px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    backdrop-filter: blur(5px);
    position: absolute;
}
.background-image {
    position: absolute;
    width: 800px;
    height: 500px;
    filter: brightness(0.5);
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
