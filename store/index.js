import Vue from 'vue';
import Vuex from 'vuex';
import moduleA from './modules/moduleA'
import moduleB from './modules/moduleB'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

/* eslint-disable no-new */
export default new Vuex.Store({
  // vuex的配置
  modules: {
    moduleA,
    moduleB
  },
  plugins: [createPersistedState({ storage: window.localStorage })],
  strict: false
})