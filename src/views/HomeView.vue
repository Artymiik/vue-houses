<template>
  <div id="page" class="flex justify-center">
    <MobileFilter class="hidden" />
    <TheFilter class="mt-16" />
    <TheListing class="mt-16" />
    <!-- <ButtonFilter :content="'Фильтровать'" :type="'default'" /> -->
  </div>
</template>

<script>
// ---------------------------
// vue components
// ---------------------------
import ButtonFilter from "../components/Home/ButtonFilter.vue";
import MobileFilter from "../components/Home/Filter/MobileFilter.vue";
import TheFilter from "../components/Home/Filter/TheFilter.vue";
import TheListing from "../components/Home/Listing/TheListing.vue";

// ---------------------------
// css adaptive
// ---------------------------
import "../media/screen-width-1300px.css";
import "../media/screen-width-900px.css";
import "../media/screen-width-550px.css";

export default {
  components: {
    TheFilter,
    MobileFilter,
    TheListing,
    ButtonFilter,
  },
};
</script>
