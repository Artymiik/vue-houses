<template>
  <div ref="image" class="slider">
    <div class="slider-content">
      <img
        v-lazyload
        class="img-card rounded-t-xl"
        :src="currentImage"
        alt="img houses"
        width="650"
        height="200"
        @mousemove="handleMouseMove"
      />
    </div>

    <div class="panel">
      <span
        v-for="(image, index) in dataImg"
        :key="index"
        :class="{ active: index == currentImageIndex }"
      ></span>
    </div>
  </div>
</template>

<script>
import lazyload from "/src/directives/lazyload";

export default {
  props: ["data"],
  data() {
    return {
      dataImg: JSON.parse(this.data),
      currentImage: JSON.parse(this.data)[0]
        ? JSON.parse(this.data)[0]
        : JSON.parse(this.data)[1],
      currentImageIndex: 0,
    };
  },
  methods: {
    handleMouseMove(event) {
      const mouseX = event.offsetX;
      this.currentImageIndex = Math.round(
        (mouseX / this.$refs.image.offsetWidth) *
          (Object.keys(this.dataImg).length - 1)
      );
      this.currentImage = this.dataImg[this.currentImageIndex];
    },
  },
  directives: {
    lazyload,
  },
};
</script>

<style>
.slider {
  position: relative;
  width: 100%; /* Настройте ширину слайдера */
  overflow: hidden;
}
.slider-content {
  display: flex;
  transition: transform 0.3s ease; /* Плавная анимация */
}
.panel {
  display: flex;
  justify-content: center;
  margin-top: -15px;
}
.panel span {
  opacity: 0;
  width: 100%;
  height: 3px;
  border-radius: 1px;
  background-color: #ffffff;
  margin: 0 1px;
  transition: 0.6s;
}
.panel .active {
  background-color: red;
  transition: 0.1s;
}
.slider:hover span {
  opacity: 1;
}
</style>
