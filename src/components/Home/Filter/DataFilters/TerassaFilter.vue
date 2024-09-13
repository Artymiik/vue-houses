<template>
  <Input
    v-for="(val, i) in content.slice(0, filtersShow ? content.length : 5)"
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
          label: "Терраса открыта",
          type: "checkbox",
          value: [0, 50],
        },
        {
          label: "Терраса крытая",
          type: "checkbox",
          value: [50, 100],
        },
        {
          label: "Без террасы",
          type: "checkbox",
          value: [0, 50],
        },
        {
          label: "Из гостиной",
          type: "checkbox",
          value: [50, 100],
        },
        {
          label: "Из кухни",
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
