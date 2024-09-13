<template>
  <div id="projects__cards">
    <Card :datas="isData" />
    <div class="flex justify-center">
      <p
        class="cursor-pointer bg-[#d61229] text-[#fff] font-bold py-3 mb-32 px-8 rounded-lg text-ms mt-7 hover:bg-[#ef4357] ease-in duration-100"
        @click="addDataProjects"
      >
        ПОКАЗАТЬ ЕЩЁ
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Card from "./Card.vue";

export default {
  components: {
    Card,
  },
  data() {
    return {
      isData: [],
      page: 1,
    };
  },
  async mounted() {
    let response;

    if (localStorage.getItem("h_projects-1")) {
      response = JSON.parse(localStorage.getItem("h_projects-1"));
      if (response != null) {
        this.isData = response.data;
      }
    } else {
      response = await axios.get("/api/api/architect/projects");
      if (response.data != null) {
        this.isData = response.data.data;
      }
    }
    // console.log(response.data.data);
  },
  methods: {
    async addDataProjects() {
      const response = await axios.get("/api/api/architect/projects", {
        params: {
          page: ++this.page,
        },
      });

      if (response.data != null && Array.isArray(response.data.data)) {
        this.isData = [...this.isData, ...response.data.data];
      }
      console.log(response.data.data);
    },
  },
};
</script>
