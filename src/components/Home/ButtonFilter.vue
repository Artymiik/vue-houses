<template>
  <div v-if="type == 'filter'">
    <div class="btn-filter-show bg-[#fff] justify-center mt-auto hidden">
      <p
        class="bg-[#d61229] text-[#fff] w-full flex justify-center p-2 rounded-lg py-3"
        @click="closeFilters"
      >
        {{ content }}
      </p>
    </div>
  </div>

  <div v-if="type == 'default'">
    <div v-if="isMobile">
      <div
        class="btn-filter-show bg-[#fff] justify-center w-screen p-3 fixed bottom-0 left-0 z-50"
      >
        <p
          class="bg-[#d61229] text-[#fff] flex w-full justify-center p-2 rounded-lg py-4 font-semibold"
          @click="showFilters"
        >
          {{ content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  data() {
    return {
      isMobile: false,
    };
  },
  props: ["content", "type"],
  mounted() {
    if (window.innerWidth <= 550) {
      this.isMobile = true;
    }
  },
  methods: {
    closeFilters() {
      gsap.to("#filters", 0.3, {
        x: 800,
        display: "none",
      });
    },
    showFilters() {
      gsap.to("#filters", 0.3, {
        x: 0,
        display: "flex",
      });
    },
  },
};
</script>
