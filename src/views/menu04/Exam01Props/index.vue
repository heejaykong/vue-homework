<template>
  <div class="card">
    <div class="card-header">Exam01Props</div>
    <!-- 부모 컴포넌트 -->
    <div class="card-body">
      <ChildA prop1="value1" prop2="value2" productNo="1" product-kind="bag" productPrice="1000" />
      <ChildB :no="product.no" :kind="product.kind" />
      <ChildB v-bind="product" />
      <ChildC :product="product" />
      <button @click="changeData" class="btn btn-info btn-sm mt-2">데이터 변경</button>
      <hr />
      <ChildD
        propA="문자열"
        :propB="1"
        :prop-c="2"
        :prop-d="'valuec'"
        :prop-e="3"
        :prop-f="{ message: '안녕하세요' }"
        :prop-g="['red', 'green', 'blue']"
        :prop-h="
          () => {
            return 'prop value';
          }
        "
        :prop-i="4"
      />
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import ChildA from "./ChildA.vue";
import ChildB from "./ChildB.vue";
import ChildC from "./ChildC.vue";
import ChildD from "./ChildD.vue";

// 반응형 속성 선언
const product = reactive({
  no: 1,
  kind: "bag",
});

function changeData() {
  product.no++;
  product.kind += "g";
}
</script>

<style scoped></style>
