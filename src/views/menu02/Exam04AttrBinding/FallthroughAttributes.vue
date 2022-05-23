<template>
  <div class="card" :id="attrs.id">
    <div class="card-header">
      <span :class="attrs.class" :style="attrs.style">
        FallthroughAttributes
      </span>
    </div>
    <div class="card-body">
      <!-- 템플릿에서 처리 -->
      <p>템플릿에서 처리</p>
      <router-link :to="attrs.to">이동</router-link>
      <button @click="attrs.onClick">버튼</button>
      <!-- 자바스크립트로 처리 -->
      <p>자바스크립트로 처리</p>
      <button @click="handleBtn1">이동</button>
      <button @click="handleBtn2">버튼</button>
    </div>
  </div>
</template>

<script>
  export default {
    inheritAttrs: false
  }
</script>
<script setup>
  import { useAttrs } from "vue";
  import { useRouter } from "vue-router";

  const attrs = useAttrs();
  const router = useRouter();

  console.log(attrs);

  function handleBtn1(){
    router.push(attrs.to);
  }

  function handleBtn2(){
    attrs.onClick();
  }

</script>

<style scoped></style>
s
