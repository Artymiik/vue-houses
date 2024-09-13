<template>
  <Input
    v-for="(val, i) in content.slice(0, filtersShow ? content.length : 6)"
    :name="i"
    :type="val.type"
    :label="val.label"
  />

  <a
    class="text-[#d61229] text-sm cursor-pointer mt-2"
    @click="ctxHiddenFilter"
  >
    {{ filtersShow ? "-" : "+" }} Подробнее (6)</a
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
          label: "Количество машиномест",
          type: "text",
          value: "Количество машиномест",
        },
        {
          label: "Нет гаража",
          type: "checkbox",
          value: [0, 50],
        },
        {
          label: "На 1 авто",
          type: "checkbox",
          value: [50, 100],
        },
        {
          label: "На 2 авто",
          type: "checkbox",
          value: [100, 0],
        },
        {
          label: "На 3 и более авто",
          type: "checkbox",
          value: [0, 50],
        },
        {
          label: "Навес для авто",
          type: "checkbox",
          value: [50, 100],
        },
        {
          label: "Расположение",
          type: "text",
          value: "Расположение",
        },
        {
          label: "Встроенный гараж",
          type: "checkbox",
          value: [100, 0],
        },
        {
          label: "Подземный гараж",
          type: "checkbox",
          value: [50, 100],
        },
        {
          label: "Пристроенный гараж",
          type: "checkbox",
          value: [100, 0],
        },
        {
          label: "Пристроенный навес",
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
