<template>
  <div v-if="datas" class="card-grid columns-girds grid gap-3 grid-cols-3">
    <div class="card" v-for="data in datas">
      <a :href="'/project/' + data.slug">
        <div class="card__in__a mt-7 rounded-xl cursor-pointer">
          <div class="top">
            <ImageCard :data="data.gallery" />
          </div>
          <div class="bottom px-4 pb-5">
            <p class="title__card font-semibold my-4">{{ data.title }}</p>
            <div class="icons__info flex items-center justify-between">
              <div class="left">
                <div class="project flex items-center">
                  <img src="/project.svg" width="16" height="17" alt="" />
                  <p class="ml-2 text-ms text-[#4d4d4d]">
                    {{ data.inner_area }} м²
                  </p>
                </div>
              </div>
              <div class="right flex items-center">
                <div class="bad flex items-center mr-4">
                  <img src="/bad.svg" width="16" height="17" alt="" />
                  <p class="ml-2 text-ms text-[#4d4d4d]">
                    {{
                      data.bedrooms_count.toLowerCase().includes("нет")
                        ? 0
                        : parseInt(
                            data.bedrooms_count.replace(/[^0-9]/g, "").trim(),
                            10
                          ) || 0
                    }}
                  </p>
                </div>
                <div class="vanna flex items-center mr-4">
                  <img src="/vanna.svg" width="16" height="17" alt="" />
                  <p class="ml-2 text-ms text-[#4d4d4d]">
                    {{ data.bathrooms }}
                  </p>
                </div>
                <div class="garage flex items-center">
                  <img src="/garage.svg" width="16" height="17" alt="" />
                  <p class="ml-2 text-ms text-[#4d4d4d]">
                    {{
                      data.garage_presence.toLowerCase().includes("нет")
                        ? 0
                        : parseInt(
                            data.garage_presence.replace(/[^0-9]/g, "").trim(),
                            10
                          ) || 0
                    }}
                  </p>
                </div>
              </div>
            </div>
            <p class="text-[#333] font-semibold text-xl mt-4">
              {{ data.price ? formatedPrice(data.price) : "0" }} <span>₽</span>
            </p>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import ImageCard from "./ImageCard.vue";

export default {
  data() {},
  props: ["datas"],
  computed: {
    galleryImages(data) {
      const galleryObject = JSON.parse(data.gallery);
      return Object.values(galleryObject);
    },
  },
  components: {
    ImageCard,
  },
  methods: {
    formatedPrice(price) {
      return price.toLocaleString("ru-RU");
    },
  },
};
</script>

<style>
.card__in__a {
  max-width: 19rem;
  min-height: 23rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}
</style>
