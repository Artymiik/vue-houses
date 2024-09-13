<template>
  <div id="listing" class="ml-9">
    <div class="header__listing">
      <p class="title__listing font-bold text-2xl">Все проекты домов</p>
    </div>
    <div
      class="filter-mobile hidden items-center justify-center border border-[#c4c4c4] p-3 rounded-lg mt-5 cursor-pointer"
      @click="showFilters"
    >
      <svg
        class="product-aggregates__controls-icon w-4 mr-2"
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.56967 2.68434C1.69257 2.41947 1.95802 2.25 2.25001 2.25H22.25C22.542 2.25 22.8075 2.41947 22.9303 2.68434C23.0532 2.94922 23.0112 3.26134 22.8227 3.48429L15 12.7346V21C15 21.2599 14.8654 21.5013 14.6443 21.638C14.4232 21.7746 14.1471 21.7871 13.9146 21.6708L9.9146 19.6708C9.66051 19.5438 9.50001 19.2841 9.50001 19V12.7346L1.67733 3.48429C1.48878 3.26134 1.44678 2.94922 1.56967 2.68434ZM3.86649 3.75L10.8227 11.9757C10.9372 12.1111 11 12.2827 11 12.46V18.5365L13.5 19.7865V12.46C13.5 12.2827 13.5628 12.1111 13.6773 11.9757L20.6335 3.75H3.86649Z"
          fill="#222222"
        ></path>
      </svg>
      <p class="filter-top-a text-base font-normal">Фильтр</p>
    </div>
    <div id="cards">
      <ProjectsCards />
      <ButtonFilter
        v-if="showBlock"
        :content="'Фильтровать'"
        :type="'default'"
      />
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import ProjectsCards from "./ProjectsCards.vue";
import ButtonFilter from "../ButtonFilter.vue";

export default {
  data() {
    return {
      showBlock: false,
    };
  },
  components: {
    ProjectsCards,
    ButtonFilter,
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    showFilters() {
      gsap.to("#filters", 0.4, {
        display: "flex",
        x: 0,
      });
    },

    handleScroll() {
      if (window.innerWidth <= 1300) {
        this.showBlock = window.scrollY > 0;
      }
    },
  },
};
</script>
