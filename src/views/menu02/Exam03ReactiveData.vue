<template>
  <div class="card">
    <div class="card-header">Exam03ReactiveData</div>
    <div class="card-body">
      <p>번호: {{ product.no }}</p>
      <p>이름: {{ product.name }}</p>
      <p>회사: {{ product.company }}</p>
      <p>가격: {{ getPrice() }}</p>
      <p>판매: {{ product.detail.sale ? "판매" : "품절" }}</p>
      <hr />
      <p v-html="product.detail.info"></p>
      <hr />
      <p>
        <img src="@/assets/products/minibag-black.png" height="150" alt="" class="mr-2" />
        <img :src="require(`@/assets/products/${product.image}`)" height="150" alt="" class="mr-2" />
        <span v-if="!product.detail.sale"><img src="@/assets/products/soldout.jpg" height="100" alt="" class="mr-2" /></span>
        <span v-show="!product.detail.sale"><img src="@/assets/products/soldout.jpg" height="100" alt="" class="mr-2" /></span>
      </p>
      <hr />
      <button @click="changeData" class="btn btn-info btn-sm">데이터 변경(reactive()방식)</button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
// 컴포넌트 속성 선언
const product = reactive({
  no: 1,
  name: "미니백",
  company: "클레인",
  price: 300000,
  image: "minibag-black.png",
  detail: {
    info: `
      <div>
        시그너츠 Cecyle Lock 마그네틱 클로저가 특징입니다.
      </div>
    `,
    sale: false,
  },
});

//메소드 선언
function getPrice() {
  return product.price;
}

function changeData() {
  product.no++;
  product.name = "빨간 미니백";
  product.price += 1000;
  product.image = "minibag-red.png";

  // reactive()로는 객체 자체를 교체하는 게 불가능하다. 그 대신 속성을 직접 조작해야 한다.
  product.detail.info = "<div>시그너츠 Cecyle Lock 마그네틱 클로저가 특징입니다.</div>";
  product.detail.sale = !product.detail.sale;
}
</script>

<style scoped></style>
