<template>
  <div class="card">
    <div class="card-header">Exam01RootState</div>
    <div class="card-body">
      <div>
        <h6>[Root State 읽기]</h6>
        <p>userId 단방향 바인딩(단순 데이터 랜더링이라는 뜻): {{ $store.state.userId }}</p>
        <p>userId 단방향 바인딩: {{ $store.getters.getUserId }}</p> <!--getter는 여기서 호출하는게 아닌, 참조이름을 작성한다.-->
        <p>userId 단방향 바인딩: {{ getUserId() }}</p>
        <p>userId 단방향 바인딩: {{ computedUserId }}</p>
        <p>userId 양방향 바인딩(사용자의 입력에 따라서도 원래데이터가 바뀐다는 뜻):
          <input type="text" v-model="$store.state.userId">
        </p>
      </div>

      <hr />

      <div>
        <h6>[Root State 변경하기]</h6>
        <p>userId 변경값 입력해보세요:
          <input type="text" v-model="userId">
          <button @click="changeUserIdByMutation">userId 변경하기(Mutation 동기방식으로)</button>
          <button @click="changeUserIdByAction">userId 변경하기(Action 비동기방식으로)</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, ref } from "vue";

const store = useStore();
console.log(store.state.userId); // 템플릿에서 $store로 가져오는 대신, 이렇게 자바스크립트로 가져올 수도 있음.

function getUserId() {
  // return store.state.userId; // 또는
  return store.getters.getUserId;
}

const computedUserId = computed(()=>{
  // return store.state.userId; // 또는
  return store.getters.getUserId;
});

const userId = ref('');

function changeUserIdByMutation() {
  store.commit('setUserId', userId.value);
}
function changeUserIdByAction() {
  store.dispatch('setUserIdByAsync', { userId: userId.value, duration: 3000 });
}

</script>

<style scoped></style>
