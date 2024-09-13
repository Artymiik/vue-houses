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
          label: "Европейский",
          type: "checkbox",
          value: [0, 50],
        },
        {
          label: "Хай-тек",
          type: "checkbox",
          value: [50, 100],
        },
        {
          label: "Минимализм",
          type: "checkbox",
          value: [0, 50],
        },
        {
          label: "Шале",
          type: "checkbox",
          value: [50, 100],
        },
        {
          label: "Барнхаус",
          type: "checkbox",
          value: [0, 50],
        },
        {
          label: "Райт",
          type: "text",
          value: "Опции крыши",
        },
        {
          label: "Фахверк",
          type: "checkbox",
          value: [50, 100],
        },
        {
          label: "Классический",
          type: "checkbox",
          value: [0, 50],
        },
        {
          label: "Английский",
          type: "checkbox",
          value: [50, 100],
        },
        {
          label: "Модерн",
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
