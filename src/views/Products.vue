<template>
  <div>
    <Slide-Group></Slide-Group>
      <!-- <p>{{ $route.params.catName }}</p> -->
      <all-items></all-items>
  </div>
</template>

<script>
import Navdrawer from "@/components/Nav-drawer.vue";
import MainSlider from "@/components/Main-Slider.vue";
import SlideGroup from "@/components/SlideGroup.vue";
import AllItems from "../components/AllItems.vue";
import {mapGetters, mapActions} from "vuex";

  export default {
    components: {
      "Nav-drawer": Navdrawer,
      "Main-slider": MainSlider,
      "Slide-Group": SlideGroup,
      "all-items": AllItems,
    },
    data: () => ({ drawer: null }),
    methods: {
      ...mapActions(["getInfo"])
    },
    computed: mapGetters(["storeInfo"]),
    created() {
      this.getInfo();
    }
  }
</script>
