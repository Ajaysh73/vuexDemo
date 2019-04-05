const state = {
  counter: 0
};
const getters = {
  doubleCounter(state) {
    return state.counter * 2;
  },
  stringCounter: state => {
    return state.counter + ' clicks';
  }
};
const mutations = {
  increment: (state, by) => {
    state.counter += by;
  },
  decrement: (state, by) => {
    state.counter -= by;
  }
};

const actions = {
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
};

export default {
  state,
  getters,
  mutations,
  actions
}
