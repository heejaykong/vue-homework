<template>
  <div class="card">
    <div class="card-header">Exam08View</div>
    <div class="card-body">
      <p>kind:  {{route.params.kind}}</p>
      <p>color: {{route.params.color}}</p>
    </div>
  </div>
</template>

<script setup>
import {useRoute} from 'vue-router';
const route = useRoute();

console.log(JSON.parse(JSON.stringify(route)))
</script>

<style scoped></style>
