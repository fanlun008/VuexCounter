<template>
    <div>
         <button @click="add">+</button>
         <input type="text">
         <button @click="decrease">-</button>
     </div>
</template>

<script>
    export default {
        methods: {
            add() {
                this.$store.dispatch('add')
            },
            decrease() {
                this.$store.dispatch('decrease')
            }
        },
    }
</script>

<style>

</style>