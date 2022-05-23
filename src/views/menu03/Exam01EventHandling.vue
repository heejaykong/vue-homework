<template>
  <div class="card">
    <div class="card-header">Exam01EventHandling</div>
    <div class="card-body">
      <div>
        <h6>[Event Handling]</h6>
        <button @click="handleBtn1">버튼1</button>
        <button @click="handleBtn2('heyyyy', $event)">버튼2</button>
      </div>

      <div>
        <h6>[DOM Event 객체 참조]</h6>
        <input :value="userId" @keyup="handleInput($event)" type="text" name="userId" />
        <br />
        입력내용: {{ userId }}
      </div>

      <div>
        <h6>[이벤트 수식어 사용]</h6>
        <a @click.prevent="handleLink" href="https://vuejs.org/guide/introduction.html">링크</a>
        <form @submit.prevent="handleForm" action="https://vuejs.org/guide/introduction.html">
          <input v-model="userId" type="text" /> <br />
          <input type="submit" value="제출" class="btn btn-success btn-sm mt-2" />
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const userId = ref("");

function handleLink() {
  console.log("handleLink");
}

function handleForm() {
  console.log("handleForm");
}

function handleInput(event) {
  userId.value = event.target.value; // ref값을 계속 갱신
}

function handleBtn1() {
  console.log("handleBtn1() 실행");
}
function handleBtn2(message, event) {
  console.log("handleBtn2() 실행");
  console.log(event);
}
</script>

<style scoped></style>
