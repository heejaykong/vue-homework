<template>
  <ModalDialogTemplate>
    <template v-slot:header> 알림 </template>
    <template v-slot:body> DialogA 내용입니다. </template>
    <template v-slot:footer>
      <button @click="$emit('confirm')">확인</button>
      <button @click="$emit('close')">닫기</button>
    </template>
  </ModalDialogTemplate>
</template>

<script setup>
import ModalDialogTemplate from "@/components/menu02/ModalDialogTemplate.vue";
</script>

<style scoped></style>
