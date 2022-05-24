<template>
  <div class="card">
    <div class="card-header">Exam02CounterState</div>
    <div class="card-body">
      <div>
        <h6>[Counter 모듈의 State 읽기]</h6>
        <!--store/counter.js에 네임스페이스 true설정했으니까, 데이터 가져올 때 네임스페이스 붙여서 가져오는 것 잊지 말기~ -->
        <p>counter/count 단방향 바인딩: {{ $store.state.counter.count }}</p>
        <p>counter/count 단방향 바인딩: {{ store.state.counter.count }}</p>
        <p>counter/count 단방향 바인딩: {{ $store.getters["counter/getCount"] }}</p>
        <p>counter/count 단방향 바인딩: {{ getCount() }}</p>
        <p>counter/count 단방향 바인딩: {{ computedCount }}</p>
        <p>
          counter/count 양방향 바인딩:
          <!-- 사용자가 변경하면 원래데이터도 값이 변경되는 양방향 바인딩~ -->
          <input type="text" v-model.number="$store.state.counter.count" />
        </p>
      </div>

      <hr />

      <div>
        <h6>[컴포넌트에서 하위State(=Counter) 변경하기~]</h6>
        <p>
          count 증가값 입력:
          <input type="text" v-model="value" />
          <button @click="changeCountByMutation">count값 변경하기(Mutation 동기방식으로)</button>
          <button @click="changeCountByAction">count값 변경하기(Action 비동기방식으로)</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, ref } from "vue";
const store = useStore();

function getCount() {
  // return store.state.counter.count; //또는
  return store.getters["counter/getCount"];
}

const computedCount = computed(() => {
  // return store.state.counter.count; // 또는
  return store.getters["counter/getCount"];
});

const value = ref(-1);

function changeCountByMutation() {
  store.commit("counter/setCount", value.value);
}
function changeCountByAction() {
  store.dispatch("counter/setCountByAsync", { value: value.value, duration: 3000 });
}
</script>

<style scoped></style>
