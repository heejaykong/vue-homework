import { createStore } from "vuex";

export default createStore({
  // 루트상태 정의
  state: {
    userId: "summer",
  },
  // 상태값을 읽는 getter 정의
  getters: {
    getUserId(state, getters, rootState, rootGetters) {
      return state.userId;
    },
  },
  // 루트상태값을 변경하는 setter정의(참고: 동기방식임.)
  mutations: {
    setUserId(state, payload) {
      state.userId = payload;
    },
  },
  // 작업수행 뒤, 결과에 따라 상태값을 변경하는 메소드 정의
  actions: {
    //payload: {userId:'....', duration:3000}이라고 치자.
    setUserIdByAsync(context, payload) {
      new Promise((resolve, reject) => {
        // 시간을 요하는 작업(주로 백엔드로 데이터 요청하는 경우겠지)
        setTimeout(() => {
          // 성공적으로 응답을 얻으면 resolve해라.
          resolve(payload.userId);
        }, payload.duration);
      })
        .then((data) => {
          // resolve되면 mutations를 이용해 상태값 변경해라.
          context.commit("setUserId", data);
          console.log("userId 상태변경 성공");
        })
        .catch((error) => {
          // 실패하면 이렇게 해라.
          console.log("userId 상태변경 실패", error);
        });
    },
  },
  modules: {},
});
