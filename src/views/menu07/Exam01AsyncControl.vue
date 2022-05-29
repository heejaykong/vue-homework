<template>
  <div class="card">
    <div class="card-header">Exam01AsyncControl</div>
    <div class="card-body">
      <p>~로딩 spinner를 구현해보자~</p>
      <p v-if="!isLoading">someValue = {{ someValue }}</p>
      <p v-if="!isLoading">someValue_oldVersion = {{ someValue_oldVersion }}</p>
      <div v-if="isLoading" class="spinner-border text-info" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const someValue = ref(null);
const someValue_oldVersion = ref(null);
const isLoading = ref(false);

function someRandomWorkThatTakesTime() {
  // axios 내부를 흉내낸 메소드를 대충 짜보자.
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("someValue");
    }, 1000);
  });
  return promise;
}

async function getSomeValue() {
  try {
    isLoading.value = true;
    const data = await someRandomWorkThatTakesTime();
    someValue.value = data;
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
}
getSomeValue();

function getSomeValue__oldVersion() {
  isLoading.value = true;
  someRandomWorkThatTakesTime()
    .then((data) => {
      someValue_oldVersion.value = data;
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      isLoading.value = false;
    });
}
getSomeValue__oldVersion();
</script>

<style scoped></style>
