<template>
  <div class="card">
    <div class="card-header">SetupHook</div>
    <div class="card-body">
      <button @click="handleBtn">버튼</button>
      <button @click="emitEvent">이벤트 발생</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: ["prop1"],
  emits: ["component-event"],

  //setup()훅 재정의하는거임
  setup(props, context) {
    const count = ref(0);

    function handleBtn() {
      console.log("handleBtn()");
    }
    function emitEvent() {
      context.emit("component-event", "value1");
    }
    return {
      count,
      handleBtn,
      emitEvent,
    };
  },
};
</script>

<style scoped></style>
