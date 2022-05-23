<template>
  <div class="card">
    <div class="card-header">ChildA</div>
    <div class="card-body">
      <p>prop1: {{ $attrs.prop1 }}</p>
      <p>prop2: {{ $attrs.prop2 }}</p>
      <p>productNo: {{ $attrs.productNo }}</p>
      <p>product-kind: {{ $attrs['product-kind'] }}</p>
      <p>productPrice: {{ $attrs.productPrice }}</p>
      <hr/>
      <p>prop1: {{ prop1 }}</p>
      <p>prop2: {{ prop2 }}</p>
      <p>productNo: {{ productNo }}</p>
      <p>product-kind: {{ productKind }}</p>
      <p>productPrice: {{ productPrice }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps(["prop1", "prop2", "productNo", "product-kind", "productPrice"]);
</script>

<style scoped></style>
