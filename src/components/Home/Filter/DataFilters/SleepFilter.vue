<template>
  <div
    class="flex flex-wrap -my-1.5"
    v-for="(val, i) in content.slice(0, filtersShow ? content.length : 12)"
    :key="i"
  >
    <template v-if="val.label">
      <Input :name="i" :type="val.type" :label="val.label" />
    </template>

    <template v-else-if="val.rooms">
      <Input
        v-for="(room, roomIndex) in val.rooms"
        :key="roomIndex"
        :name="i"
        :type="val.type"
        :label="room"
      />
    </template>
  </div>

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
          label: "Комнаты (без гостинной)",
          type: "checkbox",
          value: [0, 50],
        },
        {
          rooms: ["до 2", "до 3", "до 4", "до 5", "до 6+"],
          type: "radio",
        },
        {
          label: "Комната на первом этаже",
          type: "checkbox",
          value: [50, 100],
        },
        {
          label: "Кол-во гардеробных",
          type: "text",
          value: "Кол-во гардеробных",
        },
        {
          rooms: ["1", "2", "3+"],
          type: "radio",
        },
        {
          label: "Ванные с туалетами",
          type: "text",
          value: "Ванные с туалетами",
        },
        {
          rooms: ["1", "2", "3", "4+"],
          type: "radio",
        },
        {
          label: "Кухня",
          type: "text",
          value: "Кухня",
        },
        {
          label: "Кухня совмещённая с гостиной",
          type: "checkbox",
          value: [0, 50],
        },
        {
          label: "Изолированная кухня",
          type: "checkbox",
          value: [0, 50],
        },
        {
          label: "Остров",
          type: "checkbox",
          value: [0, 50],
        },
        {
          label: "Кладовая при кухне",
          type: "checkbox",
          value: [0, 50],
        },
        {
          label: "Спальня с ванной комнатой",
          type: "checkbox",
          value: [0, 50],
        },
        {
          label: "Спальня с гардеробной",
          type: "checkbox",
          value: [0, 50],
        },
        {
          label: "Кабинет",
          type: "checkbox",
          value: [0, 50],
        },
        {
          label: "Постирочная",
          type: "checkbox",
          value: [0, 50],
        },
        {
          label: "Котельная",
          type: "checkbox",
          value: [0, 50],
        },
        {
          label: "Кладовая для вещей",
          type: "checkbox",
          value: [0, 50],
        },
        {
          label: "Спортзал",
          type: "checkbox",
          value: [0, 50],
        },
        {
          label: "Бильярдная",
          type: "checkbox",
          value: [0, 50],
        },
        {
          label: "Зимний сад",
          type: "checkbox",
          value: [0, 50],
        },
        {
          label: "Внутренний двор / атриум",
          type: "checkbox",
          value: [0, 50],
        },
        {
          label: "Сауна / Баня",
          type: "checkbox",
          value: [0, 50],
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
