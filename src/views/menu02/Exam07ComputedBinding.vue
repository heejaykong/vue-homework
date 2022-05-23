<template>
  <div class="card">
    <div class="card-header">Exam07ComputedBinding</div>
    <div class="card-body">
      <p>name: {{ name }}</p>
      <p>ssn1: {{ ssn1 }}</p>
      <p>ssn2: {{ ssn2 }}</p>
      <p>ssn(getSsn()): {{ getSsn() }}</p>
      <p>ssn(computedSsn()): {{ computedSsn }}</p>

      <hr />
      <button class="btn btn-info btn-sm mr-2" @click="changeName">변경name</button>
      <button class="btn btn-info btn-sm mr-2" @click="changeSsn2">변경ssn2</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const name = ref("홍길동");
const ssn1 = ref("960205");
const ssn2 = ref("2222222");

// 일반함수: 리랜더링마다 실행
function getSsn() {
  console.log("getSsn() 실행");
  const ssn = ssn1.value + "-" + ssn2.value.charAt(0) + "******";
  return ssn;
}
// computed 속성: 리랜더링돼도 ssn1과 ssn2가 변경이 되지 않으면 실행되지 않음
const computedSsn = computed(() => {
  console.log("computedSsn() 실행");
  const ssn = ssn1.value + "-" + ssn2.value.charAt(0) + "******";
  return ssn;
});

// 리랜더링을 위해 이름 괜히 수정하는 함수
function changeName() {
  name.value += "!";
}
// computed 속성에서 관여하는 요소 중 ssn2를 괜히 수정하는 함수
function changeSsn2() {
  ssn2.value += "!";
}
</script>

<style scoped></style>
