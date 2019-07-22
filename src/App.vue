<template>
  <div class="container">
    <input type="text" ref="inputA">
    <button @click="confirmCounter">确定计数器</button>
    <calc v-for="count in $store.state.counterNum" :key="count" />

    <span>{{$store.state.total}}</span>
  </div>
</template>

<script>
import calc from './components/calc'
export default {
  name: 'App',
  methods: {
    confirmCounter() {
      console.log(this.$refs.inputA.value + 'aa');
      this.$store.dispatch('confirmCounter', Number(this.$refs.inputA.value))
      this.$refs.inputA.value = ''
    }
  },
  data() {
    return {
      counterNum: this.$store.getters.getCounterNum
    }
  },
  components: {
    calc,
  },
}
</script>

<style>
  .container {
    width: 80%;
    margin: 0 auto;
  }
</style>
