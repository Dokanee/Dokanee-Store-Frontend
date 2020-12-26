<template>
  <v-app>
    <v-navigation-drawer
      fixed
      v-model="drawer"
      clipped
      app
    >
    <Nav-drawer></Nav-drawer>
    
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <span class="title ml-3 mr-8"><span style="color:#00AC9C"><b>Dokanee&nbsp;</b></span><span class="font-weight-light">Store</span></span>
      <v-text-field
        solo-inverted
        flat
        hide-details
        label="Search"
        prepend-inner-icon="mdi-search"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-icon class="ma-4" color="red lighten-2">mdi-cart</v-icon>
      <v-avatar>
      <img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      >
    </v-avatar>
    </v-app-bar>
     <v-content clipped>
      <v-container fluid>
        Basic layout.
      </v-container>
    </v-content>
    <!-- <v-footer color="#E7E7E7" app text-align-center>
      <span class="justify-center black--text black--border">Copyright &copy; 2020 | Dokanee.com.bd</span>
    </v-footer> -->
  </v-app>
</template>

<script>
import Navdrawer from "@/components/Nav-drawer.vue";

  export default {
    components: {
      "Nav-drawer": Navdrawer,
    },
    data: () => ({ drawer: null }),
  }
</script>
