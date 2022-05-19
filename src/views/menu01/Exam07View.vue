<template>
  <div class="card">
    <div class="card-header">Exam07View</div>
    <div class="card-body">
    <ul>
      <p>router-link로 페이지 전환할 때</p>
      <li><router-link to="/menu01/exam08view/freeboard/blue">/menu01/exam08view/freeboard/blue</router-link></li>
      <li><router-link :to="`/menu01/exam08view/${kind1}/${color1}`">/menu01/exam08view/{{kind1}}/{{color1}}</router-link></li>
      <li><router-link :to="{path: `/menu01/exam08view/${kind2}/${color2}`}">/menu01/exam08view/{{kind2}}/{{color2}}</router-link></li>
      <li><router-link :to="{name: `menu01_exam08view`, params: {kind:kind3, color:color3}}">/menu01/exam08view/{{kind3}}/{{color3}}</router-link></li>
      <hr/>
      <p>자바스크립트로 페이지 전환할 때</p>
      <li>
        <button @click="goUrlWithParams" class="btn btn-info btn-sm mr-2">/menu01/exam08view/{{kind3}}/{{color3}}</button>
        <a href="#" @click="goUrlWithParams" class="btn btn-info btn-sm">/menu01/exam08view/{{kind3}}/{{color3}}</a>
      </li>
    </ul>
    </div>
  </div>
</template>

<script setup>
import {useRouter} from 'vue-router';
const router = useRouter();

const kind1 = 'notice';
const color1 = 'red';

const kind2 = 'qa';
const color2 = 'green';

const kind3 = 'album';
const color3 = 'yellow';

function goUrlWithParams(){
  router.push(`/menu01/exam08view/${kind3}/${color3}`)
}
</script>

<style scoped></style>
