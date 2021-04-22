<template>
    <v-card
    elevation="0"
    max-width="99%"
    max-width-xm="100%"
    color="#F7F7F7"
    class="mx-auto mt-2"
  >
    <v-carousel
      v-show="templateInfo.sliderImages? true : false"
      :continuous="true"
      :cycle="true"
      :color="colors"
      class="primary--text"
      :show-arrows="false"
      hide-delimiter-background
      delimiter-icon="mdi-minus-circle"
      :height="$vuetify.breakpoint.xs ? 200 : 320"
    >
      <v-carousel-item
      style="background-color:#F7F7F7;
      filter: blur(0px);
      -webkit-filter: blur(0px);
      "
        v-for="(slide, i) in templateInfo.sliderImages"
        :key="i"
        :src=" slide "
      >
      </v-carousel-item>
      <v-carousel-item
      style="background-color:#F7F7F7;"
      src="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/20074822/grocery-1-scaled.jpg"
      >
      </v-carousel-item>
    </v-carousel>
  </v-card>    
</template>
<script>
import {mapGetters, mapActions} from "vuex";
  export default {
    data () {
      return {
        colors: [
          'green',
          'secondary',
          'yellow darken-4',
          'red lighten-2',
          'orange darken-1',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
        sliderImages: [
          "http://res.cloudinary.com/to-let-app/image/upload/v1616687205/prlszbdw03zlhbmdfyd8.jpg",
          "http://res.cloudinary.com/to-let-app/image/upload/v1616687206/v07frgub8exmyriez3la.jpg",
        ],
      }
    },
    methods: {
      ...mapActions(["getStoreInfo","getTemplateInfo"]),
    },
    computed:
      mapGetters(["storeInfo", "templateInfo"]),

    created() {
      this.getInfo();
      this.getTemplate();
    },
  }
</script>