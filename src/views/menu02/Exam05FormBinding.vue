<template>
  <div class="card">
    <div class="card-header">Exam05FormBinding</div>
    <div class="card-body">
      <form @submit.prevent="handleSubmit">
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
            <input v-model.number="product.price" type="number" class="form-control" />
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Info</label>
          <div class="col-sm-10">
            <textarea v-model="product.info" class="form-control"></textarea>
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Madein</label>
          <div class="col-sm-10">
            <select v-model="product.madein" class="form-control">
              <option value="한국">한국</option>
              <option value="미국">미국</option>
              <option value="독일">독일</option>
            </select>
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label pt-0">Colors</label>
          <div class="col-sm-10">
            <div class="form-check">
              <input v-model="product.colors" class="form-check-input" type="checkbox" value="black" />
              <label class="form-check-label">Black</label>
            </div>
            <div class="form-check">
              <input v-model="product.colors" class="form-check-input" type="checkbox" value="red" />
              <label class="form-check-label">Red</label>
            </div>
            <div class="form-check">
              <input v-model="product.colors" class="form-check-input" type="checkbox" value="yellow" />
              <label class="form-check-label">Yellow</label>
            </div>
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label pt-0">Sale1</label>
          <div class="col-sm-10">
            <div class="form-check">
              <input v-model="product.sale1" class="form-check-input" type="checkbox" />
              <label class="form-check-label">판매여부</label>
            </div>
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label pt-0">Sale2</label>
          <div class="col-sm-10">
            <div class="form-check">
              <input v-model="product.sale2" true-value="yes" false-value="no" class="form-check-input" type="checkbox" />
              <label class="form-check-label">판매여부</label>
            </div>
          </div>
        </div>

        <fieldset class="form-group row">
          <label class="col-sm-2 col-form-label pt-0">Sex</label>
          <div class="col-sm-10">
            <div class="form-check">
              <input v-model="product.sex" class="form-check-input" type="radio" value="man" />
              <label class="form-check-label">Man</label>
            </div>
            <div class="form-check">
              <input v-model="product.sex" class="form-check-input" type="radio" value="woman" />
              <label class="form-check-label">Woman</label>
            </div>
          </div>
        </fieldset>

        <button :disabled="isInvalid" type="submit" class="btn btn-danger">등록</button>
        <button type="button" @click="handleReset">재작성</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from "vue";

const product = reactive({
  name: "",
  company: "",
  price: "0",
  colors: [],
  info: "",
  madein: "한국",
  sale1: false,
  sale2: "no",
  sex: "woman",
});

// computed()없이 작성하는 것은 비효율적.
// function isInvalid(){
//   const isValid = product.name !== "" && product.company !== "";
//   console.log(!isValid);
//   return !isValid;
// }

const isInvalid = computed(() => {
  const isValid = product.name !== "" && product.company !== "";
  console.log(!isValid);
  return !isValid;
});

function handleSubmit() {
  console.log("ㅋㅋㅋ");
}
function handleReset() {
  product.name = "";
  product.company = "";
  product.price = "0";
  product.colors = [];
  product.info = "";
  product.madein = "한국";
  product.sale1 = false;
  product.sale2 = "no";
  product.sex = "woman";
}
</script>

<style scoped></style>
