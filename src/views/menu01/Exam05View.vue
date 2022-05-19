<template>
  <div class="card">
    <div class="card-header">Exam05View</div>
    <div class="card-body">
      <button @click="goSubA" class="btn btn-info btn-sm mr-2">SubAComponent</button>
      <button @click="goSubB" class="btn btn-info btn-sm mr-2">SubBComponent</button>
      <hr/>
      <!-- 중첩된 라우트의 컴포넌트가 보여질 위치 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  const router = useRouter();
  
  function goSubA(url) {
    router.push("/menu01/exam05view/subacomponent"); // Promise 객체 리턴
  }
  function goSubB(url) {
    router.push("/menu01/exam05view/subbcomponent"); // Promise 객체 리턴
  }
</script>

<style scoped></style>
