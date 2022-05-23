<template>
  <div class="card">
    <div class="card-header">Exam08Slot</div>
    <div class="card-body">
      <button @click="showDialogA = true">Show DialogA</button>
      <button @click="showDialogB = true">Show DialogB</button>
    </div>
    <DialogA v-if="showDialogA" @confirm="showDialogA=false" @close="showDialogA=false" />
    <DialogB v-if="showDialogB" @login="showDialogB=false" @close="showDialogB=false" />
  </div>
</template>

<script setup>
import DialogA from "./DialogA.vue";
import DialogB from "./DialogB.vue";
import { ref } from "vue";

let showDialogA = ref(false);
let showDialogB = ref(false);
</script>

<style scoped></style>
