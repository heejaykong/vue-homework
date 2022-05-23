<template>
  <div class="card">
    <div class="card-header">Exam02Watch</div>
    <div class="card-body">
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">UserId</label>
        <div class="col-sm-10">
          <input v-model="userId" type="text" class="form-control" />
        </div>
      </div>
      <hr />
      <form>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Name</label>
          <div class="col-sm-10">
            <input v-model="product.name" type="text" class="form-control" />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Company</label>
          <div class="col-sm-10">
            <input v-model="product.company" type="text" class="form-control" />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Price</label>
          <div class="col-sm-10">
            <input v-model="product.price" type="number" class="form-control" />
          </div>
        </div>
      </form>

      <hr />

      <button @click="handleButton">product 객체 변경</button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const userId = ref("");
const product = ref({
  name: "",
  company: "",
  price: 0,
});

// 값 타입의 반응형속성 감시 설정하기
watch(userId, (newUserId, oldUserId) => {
  console.log("newUserId, oldUserId");
  console.log(newUserId, oldUserId);
});
// 객체 타입의 반응형속성 감시 설정하기
watch(
  product,
  (newproduct, oldproduct) => {
    console.log("newproduct, oldproduct");
    console.log(newproduct, oldproduct);
  },
  { deep: true },
);
// 객체의 속성을 감시 설정하기
watch(
  () => product.value.name,
  (newName, oldName) => {
    console.log("newName, oldName");
    console.log(newName, oldName);
  },
);
// 멀티의 값들을 감시 설정하기
watch(
  [userId, product],
  ([newuserId, newproduct], [olduserId, oldproduct]) => {
    console.log("multi: newuserId, newproduct");
    console.log(newuserId, newproduct);
    console.log("multi: olduserId, oldproduct");
    console.log(olduserId, oldproduct);
  },
  { deep: true },
);

function handleButton() {
  product.value = ref({
    name: "",
    company: "",
    price: 0,
  });
}
</script>

<style scoped></style>
