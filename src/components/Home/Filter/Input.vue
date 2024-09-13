<template>
  <!-- radio -->
  <label class="radio" v-if="type === 'radio'">
    <div class="flex">
      <p
        class="border border-[#c4c4c4] text-xs text-[#222] py-1 px-3 rounded-full mr-1 my-2 flex items-center justify-center cursor-pointer hover:border-[#717171] transition"
        :class="{ 'bg-[#000] text-[#fff] text-xl font-semibold selected': isSelected }"
        @click="isSelected = !isSelected"
      >
        {{ label }}
      </p>
    </div>
  </label>

  <!-- checkbox -->
  <label
    class="checkbox my-3 flex items-center cursor-pointer"
    v-else-if="type === 'checkbox'"
  >
    <input type="checkbox" :name="name" class="checked w-4 h-4" />
    <span class="ml-2 text-sm text-[#222]">{{ label }}</span>
  </label>

  <!-- text (p) -->
  <label class="text my-1" v-else-if="type === 'text'">
    <span class="text-sm text-[#222]">{{ label }}</span>
  </label>

  <!-- inputs -->
  <label class="inputs" v-else-if="type === 'input'">
    <div class="flex">
      <input
        type="text"
        :placeholder="label"
        class="border border-[#c4c4c4] rounded-md py-1 pl-4 text-base max-w-28 hover:border-[#717171] outline-[#545454] mr-3 my-2"
      />
    </div>
  </label>
</template>

<!-- ---------------
scripts js
------------------ -->
<script>
export default {
  props: ["name", "type", "label"],
  data() {
    return {
      isSelected: false,
    };
  },
};
</script>

<!-- --------------- -->
<!-- styles -->
<!-- --------------- -->
<style scoped>
.checked {
  appearance: none;
  cursor: pointer;
  position: relative;

  border: 1px solid #c4c4c4;
  border-radius: 4px;
  transition: 0.2s;
}
.checked:checked {
  background-color: #000000;
}
.checked:checked::after {
  content: "";
  position: absolute;
  left: 5px;
  top: 2px;
  width: 4px;
  height: 9px;
  border: solid #fff;
  border-width: 0 2px 2px 0;
  border-radius: 1px;
  transform: rotate(45deg);
}
.checked:hover {
  border: 2px solid #494848;
  transition: 0.1s;
}
.li-filter {
  margin: 0;
  margin: 0.4rem 0;
}
.selected::after {
  content: "x";
  margin-left: 5px;
  margin-top: -2px;
  font-weight: 500;
  font-size: 18px;
  display: block;
  transform: scaleY(0.9);
  opacity: 1;
}
</style>
