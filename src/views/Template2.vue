<template>
  <v-app>
    <v-app-bar color="white" height="70" app clipped-left>
        <v-app-bar-nav-icon class="hidden-lg-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-logo class="text-align:left" Left align="left" v-show="storeInfo.storeImages[0] ? true : false"><v-img 
        class="mx-2"
        max-height="60"
        max-width="200"
        contain
        :src="storeInfo.storeImages[0]"></v-img></v-app-bar-logo>
        <v-app-bar-title color="primary" class="large title ml-3 mr-2"  v-show="storeInfo.storeImages[0] ? false : true">{{ storeInfo.storeName }} &nbsp;</v-app-bar-title>
        <!-- <span class="font-weight-light">Store</span> -->
       <v-spacer></v-spacer>
      <v-text-field
        class="hidden-sm-and-down"
        solo-inverted
        color="gray"
        placeholder="Search Products Name You Need"
        flat
        rounded
        hide-details
        label=""
        prepend-inner-icon="mdi-shopping-search"
      ></v-text-field>
      <v-spacer ></v-spacer>
      <v-btn class="hidden-md-and-up mr-n2" icon feb>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn class="ma-4" icon feb>
        <v-icon>mdi-cart</v-icon>
      </v-btn>
      <v-avatar>
      <img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      >
    </v-avatar>
    </v-app-bar>
     <v-main class="grey lighten-3">
      <v-container aria-grabbed="5">
        <v-row>
          <v-col cols="3">
            <v-sheet rounded="lg">
              <Nav-drawer></Nav-drawer>
            </v-sheet>
          </v-col>
          <v-col cols="9">
            <v-sheet
              min-height="50vh"
              rounded="lg"
              style="margin-bottom:150px"
            >
            <v-container>
                <Main-slider></Main-slider>
            </v-container>
              <all-items></all-items>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <!-- <v-footer color="#E7E7E7" app>
      <span style="font-size:12px; text-align:right" class="justify-center black--text black--border">Copyright &copy; {{ new Date().getFullYear() }} | Dokanee.com.bd</span>
    </v-footer> -->
  </v-app>
</template>

<script>
import Navdrawer from "@/components/Nav-drawer.vue";
import MainSlider from "@/components/Main-Slider.vue";
import SlideGroup from "@/components/SlideGroup.vue";
import AllItems from "../components/AllItems.vue";
import app from "../App";
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
      ...mapActions(["getStoreInfo","getTemplateInfo"])
    },
    computed:
      mapGetters(["storeInfo", "templateInfo"]),

    created() {
      this.getInfo();
      this.getTemplate();
    },
  }
</script>
