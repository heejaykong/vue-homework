<template>
  <div class="card">
    <div class="card-header">Exam02TemplateRefs</div>
    <div class="card-body">
      <div>
        <h6>[DOM 요소 참조]</h6>
        <p>data: {{ data }}</p>
        <button @click="setInputValue">인풋값 변경</button>
        <input type="text" ref="inputElement" />
      </div>
      <div class='mt-3'>
        <h6>[자식컴포넌트 참조] (안 좋은 예)</h6>
        생략...
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const data = ref("summer");
const inputElement = ref(null); // 이게 실행될때면 마운트 전일테니 null로 우선 초기화.

onMounted(() => {
  inputElement.value.focus();
});
function setInputValue() {
  inputElement.value.value = data.value;
}
</script>

<style scoped></style>
