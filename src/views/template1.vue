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

    <v-app-bar color="primary--text white" height="65" app clipped-left>
        <v-app-bar-nav-icon class="hidden-lg-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-logo class="text-align:left" Left align="left" v-show="storeInfo.storeLogo ? true : false"><v-img 
        class="mx-2"
        max-height="60"
        max-width="200"
        contain
        :src="storeInfo.storeLogo"></v-img></v-app-bar-logo>
        <v-app-bar-title class="large title ml-3 mr-2"  v-show="storeInfo.storeLogo ? false : true">{{ storeInfo.storeName }} &nbsp;</v-app-bar-title>
        <!-- <span class="font-weight-light">Store</span> -->
       <v-spacer></v-spacer>
      <v-text-field
        class="hidden-sm-and-down"
        color="primary"
        placeholder="Search Product"
        smaller
        dense
        flat
        outlined
        hide-details
        v-model="search"
        prepend-inner-icon="mdi-magnify"
      ></v-text-field>
      <v-spacer ></v-spacer>
      <v-btn class="hidden-md-and-up mr-n2" icon feb>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-menu
      v-model="carts"
      :close-on-content-click="false"
      :nudge-width="150"
      min-width="300"
      max-height="600"
      offset-y="300"
      offset-x
    >
      <template v-slot:activator="{ on, attrs }">
          <v-btn class="ma-5" icon feb v-bind="attrs"
           @click="carts = true"
          v-on="on">
        <v-badge
          color="primary"
          :content="cart.length"
        ><v-icon size="20">mdi-cart</v-icon>
        </v-badge>
      </v-btn>
      </template>

      <v-card>
        <v-card-title class="head"> 
        <span>Shopping Cart</span>
        <v-spacer></v-spacer>
        <v-btn
                color="red"
                icon
                 @click="carts = false"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
        </v-card-title>
        <v-list v-for="item in cart" :key="item">
          <v-list-item>
            <v-list-item-avatar
            tile>
              <img
                :src="item.product.images[0]"
                alt="John"
                rounded="false"
              >
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title style="font-size:14px">{{item.product.productName}}</v-list-item-title>
              <v-list-item-subtitle>৳ {{ item.product.regularPrice }} x {{ item.quantity }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-hover
                 v-slot="{ hover }">
              <v-btn
                icon
                :color="hover ? 'red' : 'gray'"
              >
                <v-icon>mdi-delete-outline</v-icon>
              </v-btn>
              </v-hover>
            </v-list-item-action>
          </v-list-item>
          <v-divider></v-divider>
          
        </v-list>
        <v-card-text v-show="!totalCart()" align="center" class="justify--center mx-auto" style="text-align:center; color:gray">
            Cart is Empty
            <br>
            <br>
        </v-card-text>
        <v-card-actions class="footer primary pa-4">
          <span><h3>৳ {{ totalCart() }} </h3> </span> <v-spacer></v-spacer> <v-btn class="pa-6" depressed color="primary darken-1"><b>Placed Order</b></v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
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
      "footer-1": Footer1,
    },
    data() {
      return {
        fab: false,
        carts: false,
        drawer: null,
        subDomain: this.$route.params.store,
        search: "",
      }
    },
    methods: {
      ...mapActions(["getStoreInfo","getTemplateInfo","addProductToCart"]),
      totalCart(){
          var totalPrice = 0;
          console.log("Price");
          this.cart.forEach(i => {
            totalPrice += i.product.regularPrice * i.quantity;
          })
          console.log(totalPrice);
          return totalPrice;
      },
    },
    computed:
      mapGetters(["storeInfo", "templateInfo", "cart"]),
    watch: {
      search: function (search) {
        this.$router.push('/'+this.subDomain+'/search/'+search);
    }
    },
    created() {
      this.getInfo();
      this.getTemplate();
    },
    // mounted() {
    //   totalCart();
    // },
  }
</script>
<style scoped>
.head {
  position: sticky;
   top: 0;
   z-index: 1;
   bottom: 0;
   width: 100%;
   background-color: white;
   color: black;
   text-align: center;
}
.footer {
   position: sticky;
   left: 0;
   bottom: 0;
   width: 100%;
   background-color: gray;
   color: white;
   text-align: center;
}
</style>
