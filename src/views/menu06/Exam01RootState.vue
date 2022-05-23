<template>
  <div class="card">
    <div class="card-header">Exam01RootState</div>
    <div class="card-body">
      <div>
        <h6>[Root State 읽기]</h6>
        <p>userId 단방향 바인딩: {{ $store.state.userId }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();
console.log(store.state.userId); // 템플릿에서 $store로 가져오는 대신, 이렇게 자바스크립트로 가져올 수도 있음.

</script>

<style scoped></style>
