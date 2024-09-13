<template>
  <div id="filters" class="max-w-72 min-w-72">
    <div class="header__filters flex justify-between items-center">
      <p class="title-filters-left font-bold text-xl">Фильтры</p>
      <a href="#" class="right-close-clear text-sm underline text-[#333]"
        >Очистить</a
      >
    </div>

    <!-- ---------------------
    initial component filters
    --------------------- -->
    <InitialFilter />

    <!-- ---------------------
    button down filters
    --------------------- -->
    <ButtonFilter :content="'Показать'" :type="'filter'" />
  </div>
</template>

<script>
import gsap from "gsap";
import ButtonFilter from "../ButtonFilter.vue";
import InitialFilter from "./InitialFilter.vue";

export default {
  components: { InitialFilter, ButtonFilter },
  mounted() {
    if (window.innerWidth <= 1300) {
      document.querySelector(".title-filters-left").innerHTML = `
      <div class="left__filters__mobile flex items-center">
        <img src="/images/svg/filter-black.svg" width="15" alt="" />
        <p class="font-semibold text-base ml-3">Фильтрование</p>
      </div>`;

      document.querySelector(".right-close-clear").innerHTML = `
      <img
          src="/images/svg/close-filter.svg"
          class="closeFilters"
          width="25"
          alt=""
      />`;

      const closeFilters = document.querySelector(".closeFilters");
      closeFilters.addEventListener("click", (e) => {
        e.preventDefault();

        gsap.to("#filters", 0.3, {
          display: "none",
          x: 800,
        });
      });
    }
  },
};
</script>
