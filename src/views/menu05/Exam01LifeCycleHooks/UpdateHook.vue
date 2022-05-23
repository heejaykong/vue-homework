<template>
  <div class="card">
    <div class="card-header">UpdateHook</div>
    <div class="card-body">
      <p>counter: {{ counter }}</p>
      <p>method returned value : {{ method() }}</p>
      <button @click="counter++">증가</button>
      <button @click="counter--">감소</button>
    </div>
  </div>
</template>

<script setup>
import { onBeforeUpdate, onUpdated, ref } from "vue";
const counter = ref(0);

function method() {
  // console.log("method() 실행");
  return counter.value + 100;
}

onBeforeUpdate(() => {
  console.log("onBeforeUpdate()");
});
onUpdated(() => {
  console.log("onUpdated()");
});
</script>

<style scoped></style>
