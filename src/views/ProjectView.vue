<template>
  <div id="project" class="mx-28 mt-5">
    <div id="html__block">{{ isHtml }}</div>
    <TitleProject />

    <div class="mt-7 flex justify-between">
      <ImageProject />
      <ByProjectCard />
    </div>

    <InfoProjectCard />
  </div>
</template>

<script>
import axios from "axios";
import ByProjectCard from "../components/Project/ByProjectCard.vue";
import ImageProject from "../components/Project/ImageProject.vue";
import InfoProjectCard from "../components/Project/InfoProjectCard.vue";
import TitleProject from "../components/Project/TitleProject.vue";
import { useRoute } from "vue-router";

export default {
  data() {
    return {
      isHtml: null,
    };
  },
  components: {
    TitleProject,
    ByProjectCard,
    ImageProject,
    InfoProjectCard,
  },
  async mounted() {
    const route = useRoute();
    const response = await axios.get(`/api/project/${route.params.title}`);
    console.log(response.data)
    this.isHtml = response.data;
  },
};
</script>
