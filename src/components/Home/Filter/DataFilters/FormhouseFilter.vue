<template>
  <Input
    v-for="(val, i) in content.slice(0, filtersShow ? content.length : 3)"
    :name="i"
    :type="val.type"
    :label="val.label"
  />
</template>

<script>
import Input from "../Input.vue";

export default {
  data() {
    return {
      content: [
        {
          label: "Для узкого участка",
          type: "checkbox",
          value: [0, 50],
        },
        {
          label: "Для участка на склоне",
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
};
</script>
