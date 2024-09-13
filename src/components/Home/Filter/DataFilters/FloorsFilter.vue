<template>
  <Input
    v-for="(val, i) in content.slice(0, filtersShow ? content.length : 6)"
    :name="i"
    :type="val.type"
    :label="val.label"
  />

  <a
    class="text-[#d61229] text-sm cursor-pointe mt-2r"
    @click="ctxHiddenFilter"
  >
    {{ filtersShow ? "-" : "+" }} Подробнее (3)</a
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
          label: "Холодный чердак",
          type: "checkbox",
          value: [0, 50],
        },
        {
          label: "Мансардный этаж",
          type: "checkbox",
          value: [50, 100],
        },
        {
          label: "Антресоль",
          type: "checkbox",
          value: [100, 0],
        },
        {
          label: "3 этаж",
          type: "checkbox",
          value: [0, 50],
        },
        {
          label: "2 этаж",
          type: "checkbox",
          value: [50, 100],
        },
        {
          label: "1 этаж",
          type: "checkbox",
          value: [100, 0],
        },
        {
          label: "Дополнительные возможности",
          type: "text",
          value: "Дополнительные возможности",
        },
        {
          label: "Цокольный этаж",
          type: "checkbox",
          value: [50, 100],
        },
        {
          label: "Подвальный этаж",
          type: "checkbox",
          value: [100, 0],
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
