<template>
  <v-app>
    <v-navigation-drawer
      fixed
      v-model="drawer"
      clipped
      app
      width="280"
      height="100%"
    >
    <Nav-drawer></Nav-drawer>
    
    </v-navigation-drawer>

    <v-app-bar height="70" app clipped-left>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <span style="width:300px;font-size:25px" class="title ml-3 mr-2"><span style="color:#00AC9C"><strong>Dokanee&nbsp;</strong></span><span class="font-weight-light">Store</span></span>
       <!-- <v-spacer></v-spacer> -->
      <v-text-field
        solo-inverted
        flat
        hide-details
        label="Search"
        prepend-inner-icon="mdi-shopping-search"
      ></v-text-field>
      <v-spacer ></v-spacer>
      <v-icon class="ma-4" color="#00AC9C">mdi-cart</v-icon>
      <v-avatar>
      <img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      >
    </v-avatar>
    </v-app-bar>
     <v-content clipped style="background-color:#F7F7F7">
      <v-container fluid>
      <Main-slider></Main-slider>
      <Slide-Group></Slide-Group>
      <all-items></all-items>
      </v-container>
    </v-content>
    <!-- <v-footer color="#E7E7E7" app>
      <span style="font-size:12px; text-align:right" class="justify-center black--text black--border">Copyright &copy; 2020 | Dokanee.com.bd</span>
    </v-footer> -->
  </v-app>
</template>

<script>
import Navdrawer from "@/components/Nav-drawer.vue";
import MainSlider from "@/components/Main-Slider.vue";
import SlideGroup from "@/components/SlideGroup.vue";
import AllItems from "../components/AllItems.vue";

  export default {
    components: {
      "Nav-drawer": Navdrawer,
      "Main-slider": MainSlider,
      "Slide-Group": SlideGroup,
      "all-items": AllItems,
    },
    data: () => ({ drawer: null }),
  }
</script>
