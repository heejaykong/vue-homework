<template>
  <div class="card">
    <div class="card-header">Child</div>
    <div class="card-body">
      <h6>[자식 -> 부모]</h6>
      <button @click="$emit('child-event-1', data1)">child-event-1를 emit하기</button>
      <button @click="handleChildEmit2">child-event-2를 emit하기</button>
    </div>

    <hr />

    <div>
      <h6>[자식(event) -> 부모(props) -> 자식]</h6>
      <button @click="handleIncrement">increment-event를 emit하기</button>
      <button @click="handleDecrement">decrement-event를 emit하기</button>
      <p>Counter: {{ counter }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, ref, defineProps } from "vue";
const emit = defineEmits(["child-event-2", "increment-event", "decrement-event"]);
defineProps(["counter"]);

const data1 = ref("stringValue1");
const data2 = ref(100);

function handleChildEmit2() {
  emit("child-event-2", data1.value, data2.value);
}

function handleIncrement() {
  emit("increment-event");
}
function handleDecrement() {
  emit("decrement-event");
}
</script>

<style scoped></style>
