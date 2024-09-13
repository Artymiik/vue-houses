<template>
  <Input
    v-for="(val, i) in content.slice(0, filtersShow ? content.length : 7)"
    :name="i"
    :type="val.type"
    :label="val.label"
  />

  <a
    class="text-[#d61229] text-sm cursor-pointer mt-2"
    @click="ctxHiddenFilter"
  >
    {{ filtersShow ? "-" : "+" }} Подробнее (2)</a
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
          label: "Односкатная (косая)",
          type: "checkbox",
          value: [0, 50],
        },
        {
          label: "Двускатная",
          type: "checkbox",
          value: [50, 100],
        },
        {
          label: "Четырехскатная",
          type: "checkbox",
          value: [0, 50],
        },
        {
          label: "Плоская",
          type: "checkbox",
          value: [50, 100],
        },
        {
          label: "Сложной формы",
          type: "checkbox",
          value: [0, 50],
        },
        {
          label: "Опции крыши",
          type: "text",
          value: "Опции крыши",
        },
        {
          label: "Слуховое окно",
          type: "checkbox",
          value: [50, 100],
        },
        {
          label: "Кукушка",
          type: "checkbox",
          value: [0, 50],
        },
        {
          label: "Без скатов (Барн)",
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
