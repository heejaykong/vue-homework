<template>
  <div class="card">
    <div class="card-header">ChildA</div>
    <div class="card-body">
      <p>data1: {{ message.data1.value }}</p>
      <p>data2.name1: {{ message.data2.value.name1 }}</p>
      <p>data2.name2: {{ message.data2.value.name2 }}</p>
      <p>data3.name3: {{ message.data3.name3 }}</p>
      <p>data3.name4: {{ message.data3.name4 }}</p>
    </div>
    <button @click="changeData">데이터 변경</button>
  </div>
</template>

<script setup>
import { inject } from "vue";
const message = inject("message");

function changeData() {
  message.data1.value += "!";
  message.data2.value.name1 += "!";
  message.data2.value.name2 += "!";
  message.data3.name3 += "!";
  message.data3.name4 += "!";
}
</script>

<style scoped></style>
