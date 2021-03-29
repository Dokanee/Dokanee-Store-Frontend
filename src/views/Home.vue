<template>
  <div>
      <Main-slider></Main-slider>
      <Slide-Group></Slide-Group>
      <all-items></all-items>
  </div>
</template>

<script>
import Navdrawer from "@/components/Nav-drawer.vue";
import MainSlider from "@/components/Main-Slider.vue";
import SlideGroup from "@/components/SlideGroup.vue";
import AllItems from "../components/AllItems.vue";
import app from "../App.vue";
import {mapGetters, mapActions} from "vuex";

  export default {
    components: {
      "Nav-drawer": Navdrawer,
      "Main-slider": MainSlider,
      "Slide-Group": SlideGroup,
      "all-items": AllItems,
    },
    data() {
      return {
        drawer: null,
        subDomain: this.$route.params.store,
      }
    },
    methods: {
      ...mapActions(["getStoreInfo"])
    },
    computed: mapGetters(["storeInfo"]),
    created() {
      this.getInfo();
    },    
  }
</script>
