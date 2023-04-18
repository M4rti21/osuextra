<template>
    <div class="d-flex flex-row gap-5">
        <IdInput @addedValue="usrLeft"/>
        <IdInput @addedValue="usrRight"/>
    </div>
</template>

<script>
import IdInput from "@/components/IdInput.vue";
import axios from "axios";

export default {
    name: "CompareView",
    components: {IdInput},
    data() {
        return {
            usrLeftData: {},
            usrRightData: {}
        }
    },
    methods: {
        usrLeft(id) {
            this.getUsrData(id, 'l');
            console.log(this.usrLeftData)
        },
        usrRight() {
            console.log('hello');
        },
        getUsrData(id, pos) {
            axios.get(
                'https://wysi727.com/osuextrasrv/usrdata.php',
                {
                    params: {
                        usr: id
                    }
                }
            ).then(response => {
                if (pos === 'l') {
                    this.usrLeftData = JSON.parse(response.data);
                } else {
                    this.usrRightData = JSON.parse(response.data);
                }
            }).catch(error => {
                console.error(error);
            });
        }
    }
}
</script>

<style scoped>

</style>