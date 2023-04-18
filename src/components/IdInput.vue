<template>
    <form class="mt-5 mx-auto d-flex flex-column" style="width: 400px" @submit.prevent="emitMethod" ref="inputform">
        <div class="input-group">
            <input v-model="val" type="text" class="form-control" placeholder="Username or Id"/>
            <button class="input-group-text btn btn-primary" id="basic-addon1" type="submit"><i class="bi bi-search"></i></button>
        </div>
    </form>
</template>

<script>
export default {
    name: "IdInput",
    data() {
        return {
            val: ''
        }
    },
    methods: {
        emitMethod() {
            if (this.val.length > 0) {
                this.$emit('addedValue', this.val);
                this.$refs.inputform.reset();
            }
        }
    }
}
</script>

<style scoped>

</style>