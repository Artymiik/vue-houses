<template>
  <div
    class="flex items-center"
    v-for="(val, i) in content.slice(0, filtersShow ? content.length : 5)"
    :key="i"
  >
    <template v-if="val.label">
      <Input class="li-filter" :name="i" :type="val.type" :label="val.label" />
    </template>

    <template v-else-if="val.inputs">
      <Input
        v-for="(input, inputIndex) in val.inputs"
        :key="inputIndex"
        :name="i"
        :type="val.type"
        :label="input"
      />
      <p class="text-ms text-[#222]">м²</p>
    </template>
  </div>

  <a
    class="text-[#d61229] text-sm cursor-pointer mt-2"
    @click="ctxHiddenFilter"
  >
    <span>{{ filtersShow ? "-" : "+" }}</span> Подробнее (3)</a
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
          label: "до 50 м²",
          type: "checkbox",
          value: [0, 50],
        },
        {
          label: "50 - 100 м²",
          type: "checkbox",
          value: [50, 100],
        },
        {
          label: "70 - 100 м²",
          type: "checkbox",
          value: [100, 0],
        },
        {
          label: "100 - 120 м²",
          type: "checkbox",
          value: [0, 50],
        },
        {
          inputs: ["От", "До"],
          type: "input",
        },
        {
          label: "120 - 160 м²",
          type: "checkbox",
          value: [50, 100],
        },
        {
          label: "160 - 200 м²",
          type: "checkbox",
          value: [100, 0],
        },
        {
          label: "200 и более м²",
          type: "checkbox",
          value: [100, 0],
        },
      ],
      filtersShow: false,
      inputIsAtEnd: false,
    };
  },
  components: {
    Input,
  },
  methods: {
    ctxHiddenFilter() {
      const inputIndex = this.content.findIndex(
        (item) => item.type === "input"
      );

      if (inputIndex !== -1) {
        if (!this.inputIsAtEnd) {
          // Перемещаем "От/До" в конец
          const inputItem = this.content.splice(inputIndex, 1)[0];
          this.content.push(inputItem);
          this.inputIsAtEnd = true;
        } else {
          // Возвращаем "От/До" на исходное место
          const inputItem = this.content.pop();
          this.content.splice(inputIndex, 0, inputItem);
          this.inputIsAtEnd = false;
          location.reload();
        }
      }

      addHiddenFilters(this);
    },
  },
};
</script>
