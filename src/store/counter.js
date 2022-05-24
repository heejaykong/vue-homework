export default {
  namespaced: true, // 모듈의 이름(counter)를 루트의 하위 네임스페이스로 설정

  state: {
    count: 0,
  },
  getters: {
    getCount(state, getters, rootState, rootGetters) {
      return state.count;
    },
  },
  mutations: {
    setCount(state, payload) {
      state.count += payload;
    },
  },
  actions: {
    setCountByAsync(context, payload) {
      // payload: {value:1, duration:3000} 이런 형태라고 치자.
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(payload.value);
        }, payload.duration);
      })
        .then((data) => {
          console.log("성공~");
          context.commit("setCount", data);
        })
        .catch((error) => {
          console.log("실패.");
          console.log(error);
        });
    },
  },
  module: {},
};
