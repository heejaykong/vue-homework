<template>
  <div class="card">
    <div class="card-header">Exam04AttrBinding</div>
    <div class="card-body">
      <div>
        <a :href="vueHome" class="btn">Vue Home</a>
        <router-link :to="home" class="btn">Home</router-link>
      </div>
      <hr/>
      <div>
        <img :src="require(`@/assets/photos/${imgName}`)" alt="" height="150"/>
      </div>
      <hr/>
      <div>
        <span>짱 멋진 풍경! </span>
        <span :class="className">짱 멋진 풍경! </span>
        <span :class="[className, 'font-weight-bold']">짱 멋진 풍경! </span>
        <span :class="{class1:isClass1, class2:isClass2}">짱 멋진 풍경!</span>
      </div>
      <hr/>
      <div>
        <span :style="style">ㅋㅑ~! 절경! </span>
        <span :style="[style, 'color:blue;']">ㅋㅑ~! 절경! </span>
        <span :style="{color: color}">ㅋㅑ~! 절경!</span>
      </div>
      <hr/>
      <button @click="changeData" class="btn btn-info btn-sm">변경</button>
      <hr/>
      <FallthroughAttributes
        id="myCom"
        class="bg-danger"
        style="color:yellow;"
        to="/"
        @click="handleBtn" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import FallthroughAttributes from "./FallthroughAttributes";

// 반응형 속성 선언
const vueHome = ref("https://vuejs.org/");
const home = ref("/");
const imgName = ref("photo1.jpg");
const className = ref("class1");
const isClass1 = ref(false);
const isClass2 = ref(true);
const style = ref("color: green");
const color = ref("red");

// 메소드 선언
const toggle = ref(true);
function changeData() {
  if(toggle.value) {
    imgName.value = "photo2.jpg";
    className.value = "class2";
    isClass1.value = false;
    isClass2.value = true;
    style.value = "color: red;";
    color.value = "red"; 
  } else {
    imgName.value = "photo1.jpg";
    className.value = "class1";
    isClass1.value = true;
    isClass2.value = false;
    style.value = "color: green;";
    color.value = "green";
  }
  toggle.value = !toggle.value;
}

function handleBtn(){
  console.log("clicked");
}
</script>

<style scoped>
  .class1 {
    color: green;
  }
  .class2 {
    color: red;
  }
</style>
