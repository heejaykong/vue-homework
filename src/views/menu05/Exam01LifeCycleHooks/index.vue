<template>
  <div class="card">
    <div class="card-header">Exam01LifeCycleHooks</div>
    <div class="card-body">
      <SetupHook prop1="value1" @component-event="handleEvent" />
      <MountHook />
      <UpdateHook />
    </div>
  </div>
</template>

<script setup>
import SetupHook from "./SetupHook.vue";
import MountHook from "./MountHook.vue";
import UpdateHook from "./UpdateHook.vue";

function handleEvent(arg1) {
  console.log("arg1:", arg1);
}
</script>

<style scoped></style>
