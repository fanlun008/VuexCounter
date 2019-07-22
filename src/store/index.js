import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  counterNum: 0,
  total: 0
}

const actions = {
  confirmCounter({commit}, inputvalue) {
    console.log('actions...')
    commit('confirmCounter_m', {inputvalue})
  },
  add({commit}) {
    commit('add_m')
  },
  decrease({commit}) {
    commit('decrease_m')
  }
}

const mutations = {
  confirmCounter_m(state, {inputvalue}) {
    console.log('mutations...', inputvalue)
    state.counterNum = inputvalue;
  },
  add_m(state) {
    state.total += 1
  },
  decrease_m(state) {
    state.total -= 1
  }
}

const getters = {
  getCounterNum(state) {
    return state.total
  }
}

export default new Vuex.Store({
  state, //状态对象
  mutations, //包含多个更新state函数的对象
  actions, //包含多个对应事件回调函数的对象
  getters //包含多个getter计算属性的对象
})
