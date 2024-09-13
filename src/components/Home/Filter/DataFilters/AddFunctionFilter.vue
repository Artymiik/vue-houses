<template>
  <Input
    v-for="(val, i) in content.slice(0, filtersShow ? content.length : 8)"
    :name="i"
    :type="val.type"
    :label="val.label"
  />

  <a
    class="text-[#d61229] text-sm cursor-pointer mt-2"
    @click="ctxHiddenFilter"
  >
    {{ filtersShow ? "-" : "+" }} Подробнее (14)</a
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
          label: "Эркер",
          type: "text",
          value: [0, 50],
        },
        {
          label: "Без эркера",
          type: "checkbox",
          value: [50, 100],
        },
        {
          label: "С 1 эркером",
          type: "checkbox",
          value: [0, 50],
        },
        {
          label: "С 2 эркерами",
          type: "checkbox",
          value: [50, 100],
        },
        {
          label: "С полукруглым эркером",
          type: "checkbox",
          value: [0, 50],
        },
        {
          label: "Балкон / лоджия",
          type: "text",
          value: "Опции крыши",
        },
        {
          label: "Есть балкон",
          type: "checkbox",
          value: [50, 100],
        },
        {
          label: "Есть лоджия",
          type: "checkbox",
          value: [0, 50],
        },
        {
          label: "Оборудование",
          type: "text",
          value: [50, 100],
        },
        {
          label: "Погреб",
          type: "checkbox",
          value: [50, 100],
        },
        {
          label: "Печь",
          type: "checkbox",
          value: [50, 100],
        },
        {
          label: "Барбекю на террасе",
          type: "checkbox",
          value: [0, 50],
        },
        {
          label: "Купель",
          type: "checkbox",
          value: [50, 100],
        },
        {
          label: "Бассейн",
          type: "checkbox",
          value: [50, 100],
        },
        {
          label: "Окна",
          type: "text",
          value: [50, 100],
        },
        {
          label: "Окна в пол на кухне",
          type: "checkbox",
          value: [0, 50],
        },
        {
          label: "Окна в пол в гостиной",
          type: "checkbox",
          value: [50, 100],
        },
        {
          label: "Панорамные окна",
          type: "checkbox",
          value: [50, 100],
        },
        {
          label: "Круглые окна",
          type: "checkbox",
          value: [50, 100],
        },
        {
          label: "Барбекю на террасе",
          type: "checkbox",
          value: [0, 50],
        },
        {
          label: "Мансардные окна",
          type: "checkbox",
          value: [50, 100],
        },
        {
          label: "Второй свет в гостиной",
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
