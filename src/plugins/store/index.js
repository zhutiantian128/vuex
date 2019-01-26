import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex)
const state = {
  testMsg: '原始文本',
  childText: "子组件原始文本"
}

const mutations = {
  changeTestMsg(state, str) {
    state.testMsg = str;
  },
  changeChildText(state, str) {
    state.childText = str;
  }

}

const store = new Vuex.Store({
  state: state,
  mutations: mutations
})

export default store;
