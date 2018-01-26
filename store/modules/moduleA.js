const moduleA = {
  state: {
    count: 6,
    list: [1, 5, 8, 10, 30, 50]
  },
  getters: {
    filteredList: state => {
      return state.list.filter(item => item < 10);
    },
    listCount: (state, getters) => {
      return getters.filteredList.length;
    }
  },
  mutations: {
    increment(state, n = 1) {
      state.count += n;
    }
  },
  actions: {
    increment(context) {
      context.commit('increment');
    },
    asyncIncrement(context) {
      return new Promise(resolve => {
        setTimeout(() => {
          context.commit('increment');
          resolve();
        }, 1000)
      });
    }
  }
};

export default moduleA;