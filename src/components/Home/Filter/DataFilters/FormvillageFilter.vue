<template>
  <Input
    v-for="(val, i) in content.slice(0, filtersShow ? content.length : 2)"
    :name="i"
    :type="val.type"
    :label="val.label"
  />

  <a
    class="text-[#d61229] text-sm cursor-pointer mt-2"
    @click="ctxHiddenFilter"
  >
    {{ filtersShow ? "-" : "+" }} Подробнее (5)</a
  >
</template>

<script>
import { addHiddenFilters } from "/src/services/filters.js";
import Input from "../Input.vue";

export default {
  data() {
    return {
      content: [
        {
          label: "Прямоугольный",
          type: "checkbox",
          value: [0, 50],
        },
        {
          label: "Квадратный",
          type: "checkbox",
          value: [50, 100],
        },
        {
          label: "Угловой (буквой Г)",
          type: "checkbox",
          value: [0, 50],
        },
        {
          label: "П-образный (полукаре)",
          type: "checkbox",
          value: [50, 100],
        },
        {
          label: "Т-образный (буквой Т)",
          type: "checkbox",
          value: [0, 50],
        },
        {
          label: "Круглый",
          type: "text",
          value: "Опции крыши",
        },
        {
          label: "Сложной формы",
          type: "checkbox",
          value: [50, 100],
        },
      ],
      filtersShow: false,
    };
  },
  components: {
    Input,
  },
  methods: {
    ctxHiddenFilter() {
      addHiddenFilters(this);
    },
  },
};
</script>
