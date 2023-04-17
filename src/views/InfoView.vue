<template>
    <div class="d-flex flex-column justify-content-center">
        <IdInput @addedValue="added"/>
        <div id="user" class="d-flex align-items-center justify-content-center">
            <UserCard :usr_data="user_data"/>
        </div>
        <div class="spinner-border" role="status" v-if="load">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>

<script>
import IdInput from "@/components/IdInput.vue";
import UserCard from "@/components/UserCard.vue";
import axios from "axios";

export default {
    name: "RomanNumbers",
    components: {
        IdInput,
        UserCard
    },
    data() {
        return {
            user_data: {
                a: 'a'
            },
            fetch_complete: false,
            load: false,
        }
    },
    methods: {
        added(value) {
            this.load = true;
            axios.get(
                'https://wysi727.com/osuextrasrv/usrdata.php',
                {
                    params: {
                        usr: value
                    }
                }
            ).then(response => {
                this.user_data = JSON.parse(response.data);
                console.log(this.user_data)
            }).catch(error => {
                console.error(error);
            });
            this.load = false;
        }
    }
}

</script>

<style scoped>

</style>