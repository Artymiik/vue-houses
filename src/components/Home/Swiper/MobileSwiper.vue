<template>
  <div class="swiper-container flex overflow-hidden">
    <div class="swiper-wrapper flex">
      <div v-for="(image, index) in imgs" :key="index" class="swiper-slide">
        <img :src="image" class="img-card rounded-t-xl" />
      </div>
    </div>

    <div class="swiper-p">
      <span
        v-for="(image, index) in imgs"
        :key="index"
        :class="{ active: index == currentImageIndex }"
      ></span>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";

export default {
  props: ["imgs"],
  data() {
    return {
      currentImageIndex: 0,
    };
  },
  mounted() {
    new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop: true,
    });
  },
};
</script>

<style>
.swiper-p {
  display: flex;
  justify-content: center;
  margin-top: -15px;
}
.swiper-p span {
  opacity: 1;
  width: 100%;
  height: 3px;
  border-radius: 1px;
  background-color: #000000;
  margin: 0 1px;
  transition: 0.6s;
}
.swiper-p .active {
  background-color: red;
  transition: 0.1s;
}
</style>
