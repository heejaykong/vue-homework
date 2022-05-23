<template>
  <div class="card">
    <div class="card-header">Exam02EventEmit</div>
    <div class="card-body">
      <Child
        @child-event-1="handleChlidEvent1"
        @child-event-2="handleChlidEvent2"
        :counter="counter"
        @increment-event="counter++"
        @decrement-event="counter--"
      />
    </div>
  </div>
</template>

<script setup>
import Child from "./Child.vue";
import { ref } from "vue";

const counter = ref(0);

function handleChlidEvent1(data1) {
  console.log("data1:", data1);
}
function handleChlidEvent2(data1, data2) {
  console.log("data1:", data1);
  console.log("data2:", data2);
}
</script>

<style scoped></style>
