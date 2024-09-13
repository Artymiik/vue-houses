<template>
  <div v-if="isMobile">
    <MobileSwiper :imgs="dataImg" />
  </div>

  <div v-else>
    <DescktopSwiper :data="data" />
  </div>
</template>

<script>
import MobileSwiper from "../Swiper/MobileSwiper.vue";
import DescktopSwiper from "../Swiper/DescktopSwiper.vue";

export default {
  props: ["data"],
  mounted() {
    if (window.innerWidth <= 1300) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  },
  data() {
    return {
      dataImg: JSON.parse(this.data),
      isMobile: false,
      currentImage: JSON.parse(this.data)[0]
        ? JSON.parse(this.data)[0]
        : JSON.parse(this.data)[1],
    };
  },
  components: {
    MobileSwiper,
    DescktopSwiper,
  },
};
</script>

<style>
.img-card {
  width: 100%;
  height: 200px;
  object-fit: cover;

  display: flex;
  margin: 0 auto;
}
/* .slider-dots {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
}

.slider-dots span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ccc;
  margin: 0 5px;
  cursor: pointer;
}

.slider-dots .active {
  background-color: #333;
} */
</style>
