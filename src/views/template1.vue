<template>
  <v-app>
    <v-navigation-drawer
      fixed
      v-model="drawer"
      clipped
      app
      width="255"
      height="100%"
    >
    <Nav-drawer></Nav-drawer>
    
    </v-navigation-drawer>

    <v-app-bar color="white" height="65" app clipped-left>
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
        placeholder=""
        flat
        rounded
        hide-details
        label="Search Products Name You Need"
        v-model="search"
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
     <v-content clipped style="background-color:#F7F7F7">
      <v-container fluid>
      <router-view></router-view>
      </v-container>
      <footer-1></footer-1>
    </v-content>
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
import Footer1 from '@/components/Footer1.vue';

  export default {
    components: {
      "Nav-drawer": Navdrawer,
      "Main-slider": MainSlider,
      "Slide-Group": SlideGroup,
      "all-items": AllItems,
      "footer-1": Footer1
    },
    data() {
      return {
        drawer: null,
        subDomain: this.$route.params.store,
        search: "",
      }
    },
    methods: {
      ...mapActions(["getStoreInfo","getTemplateInfo"])
    },
    computed:
      mapGetters(["storeInfo", "templateInfo"]),
    watch: {
      search: function (search) {
        this.$router.push('/'+this.subDomain+'/search/'+search)
    }
    },
    created() {
      this.getInfo();
      this.getTemplate();
    },
    // mounted() {
    //   this.$vuetify.theme.themes.light.primary = this.templateInfo.primaryColor.slice(0, -2)
    // },
  }
</script>
