<template>
  <Input
    v-for="(val, i) in content.slice(0, filtersShow ? content.length : 4)"
    :name="i"
    :type="val.type"
    :label="val.label"
  />

  <a
    class="text-[#d61229] text-sm cursor-pointer mt-2"
    @click="ctxHiddenFilter"
  >
    {{ filtersShow ? "-" : "+" }} Подробнее (10)</a
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
          label: "Газобетон",
          type: "checkbox",
          value: [0, 50],
        },
        {
          label: "Деревянный каркас",
          type: "checkbox",
          value: [50, 100],
        },
        {
          label: "Кирпич",
          type: "checkbox",
          value: [0, 50],
        },
        {
          label: "Брус",
          type: "checkbox",
          value: [50, 100],
        },
        {
          label: "Клееный брус",
          type: "checkbox",
          value: [0, 50],
        },
        {
          label: "Бревно",
          type: "text",
          value: "Опции крыши",
        },
        {
          label: "Деревянный кирпич",
          type: "checkbox",
          value: [50, 100],
        },
        {
          label: "Каркасно-панельные",
          type: "checkbox",
          value: [0, 50],
        },
        {
          label: "SIP",
          type: "checkbox",
          value: [50, 100],
        },
        {
          label: "Фахверк",
          type: "checkbox",
          value: [50, 100],
        },
        {
          label: "Монолитно-каркасный",
          type: "checkbox",
          value: [50, 100],
        },
        {
          label: "Монолитные (VELOX)",
          type: "checkbox",
          value: [0, 50],
        },
        {
          label: "ЛСТК",
          type: "checkbox",
          value: [50, 100],
        },
        {
          label: "CLT",
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
