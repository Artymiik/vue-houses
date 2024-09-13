<template>
  <div class="filter__inside" v-for="(ctx, index) in content" :key="index">
    <!-- header filters -->
    <div
      :class="
        'header__content__filters__' +
        index +
        ' flex items-center justify-between my-3 cursor-pointer'
      "
      @click="toggleFilter(index)"
    >
      <p class="font-bold text-base text-[#222]">{{ ctx.title }}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
        :class="
          ('lucide lucide-chevron-up',
          filterOpen[index] ? 'up-str' : 'down-str')
        "
      >
        <path d="m18 15-6-6-6 6" />
      </svg>
    </div>

    <!-- content -->
    <div :class="'content__filter__' + index">
      <div
        :class="
          ('check__' + index + ' flex flex-col cursor-pointer',
          { hidden: !filterOpen[index] })
        "
      >
        <component :is="ctx.vueComponent" />
      </div>
    </div>
    <div class="border border-[#000] opacity-10 my-3"></div>
  </div>
</template>

<script>
import SquareHouse from "./DataFilters/SquareHouse.vue";
import FloorsFilter from "./DataFilters/FloorsFilter.vue";
import GarageFilter from "./DataFilters/GarageFilter.vue";
import SleepFilter from "./DataFilters/SleepFilter.vue";
import FormhouseFilter from "./DataFilters/FormhouseFilter.vue";
import FormroofFilter from "./DataFilters/FormroofFilter.vue";
import StylehouseFilter from "./DataFilters/StylehouseFilter.vue";
import MaterialFilter from "./DataFilters/MaterialFilter.vue";
import FormvillageFilter from "./DataFilters/FormvillageFilter.vue";
import TerassaFilter from "./DataFilters/TerassaFilter.vue";
import AddFunctionFilter from "./DataFilters/AddFunctionFilter.vue";

export default {
  props: ["title"],
  data() {
    return {
      content: [
        {
          title: "Внутренняя площадь",
          vueComponent: SquareHouse,
        },
        {
          title: "Этажи",
          vueComponent: FloorsFilter,
        },
        {
          title: "Гараж",
          vueComponent: GarageFilter,
        },
        {
          title: "Спальни",
          vueComponent: SleepFilter,
        },
        {
          title: "Форма участка",
          vueComponent: FormhouseFilter,
        },
        {
          title: "Форма крыши",
          vueComponent: FormroofFilter,
        },
        {
          title: "Стиль дома",
          vueComponent: StylehouseFilter,
        },
        {
          title: "Материал несущих стен",
          vueComponent: MaterialFilter,
        },
        {
          title: "Форма дома",
          vueComponent: FormvillageFilter,
        },
        {
          title: "Терраса",
          vueComponent: TerassaFilter,
        },
        {
          title: "Дополнительные опции",
          vueComponent: AddFunctionFilter,
        },
      ],
      filterOpen: [],
    };
  },
  mounted() {
    if (window.innerWidth <= 1300) {
      this.filterOpen = Array(this.content.length).fill(false);
    } else {
      this.filterOpen = Array(this.content.length).fill(true);
    }
  },
  methods: {
    toggleFilter(index) {
      this.filterOpen[index] = !this.filterOpen[index];
    },
    toggleCheckBox() {},
  },
};
</script>

<style scoped>
.up-str {
  transform: rotate(0);
  transition: 0.3s;
}
.down-str {
  transform: rotate(-180deg);
  transition: 0.3s;
}
</style>
