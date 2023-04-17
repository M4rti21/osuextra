<template>
    <form class="mt-5 mx-auto d-flex flex-column" style="width: 400px" @submit.prevent="emitMethod" ref="inputform">
        <div class="input-group">
            <span class="input-group-text" id="basic-addon1">Id | Username</span>
            <input v-model="val" type="text" class="form-control"/>
        </div>
        <button class="btn btn-primary mt-3 mx-auto" type="submit"><i class="bi bi-search"></i> Search</button>
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