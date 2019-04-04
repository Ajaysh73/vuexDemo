import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    doubleCounter(state) {
      return state.counter * 2;
    },
    stringCounter: state => {
      return state.counter + ' clicks';
    }
  },
  mutations: {
    increment: (state, by) => {
      state.counter += by;
    },
    decrement: (state, by) => {
      state.counter -= by;
    }
  },
  actions: {
    increment: ({ commit }, by) => {
      commit('increment', by);
    },
    decrement: ({ commit }, by) => {
      commit('decrement', by);
    },
    asyncIncrement: ({ commit }, payload) => {
      setTimeout(() => {
        commit('increment', payload.by);
      }, payload.duration);
    },
    asyncDecrement: ({ commit }, payload) => {
      setTimeout(() => {
        commit('decrement', payload.by);
      }, payload.duration);
    }
  }
});
