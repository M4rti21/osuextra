<template>
    <div class="d-flex flex-column justify-content-center">
        <IdInput @addedValue="added"/>
        <div id="user" class="d-flex align-items-center justify-content-center">
            <UserCard :usr_data="user_data" :ready="fetch_complete"/>
            <div class="spinner-border mt-4" role="status" v-if="!fetch_complete && start">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
</template>

<script>
import IdInput from "@/components/IdInput.vue";
import UserCard from "@/components/UserCard.vue";
import axios from "axios";

export default {
    name: "InfoView",
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
            start: false
        }
    },
    methods: {
        added(value) {
            this.start = true;
            this.fetch_complete = false;
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
                this.fetch_complete = true;
            }).catch(error => {
                console.error(error);
            });
        }
    }
}

</script>

<style scoped>

</style>