<template>
  <v-app id="inspire">
    <v-app-bar
      app
      shrink-on-scroll
      src="https://chaldn.com/asset/Egg.Grocery.Fabric/Egg.Grocery.Web1/1.5.0+Release-1879/Default/stores/chaldal/components/landingPage2/LandingPage/images/landingBannerTop.jpg"
      fade-img-on-scroll
    >
      <v-container>
        <v-row>
      <v-toolbar-title><b>Dokanee Shopping</b></v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon
          @click="toTop"
          >
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-row>
        <v-row>
         <div>
           <v-container class="text-center">
             <v-row>
             </v-row>
            </v-container>
         </div>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-row class="ma-3">
          <h4>
            Total Shop : <v-chip outlined color="gray">{{shopInfo.data.totalContent}}</v-chip>
          </h4>
        </v-row>
        <v-row :dense="$vuetify.breakpoint.xs ? true : false">
          <v-col
            v-for="n in shopList"
            track-by="n"
            :key="n"
            cols="6"
            sm="4"
            lg="3"
          >
              <v-card
    class="mx-auto pb-2"
    max-width="344"
    v-ripple
    cursor-pointer
    @click="visit(n)"
  >
    <v-img
      :src="n.storeLogo==null ? 'https://uploads-ssl.webflow.com/5c14e387dab576fe667689cf/5f76d7cb690e57c164388d32_Artboard%208.png' : n.storeLogo"
      height="180px"
    ></v-img>

    <v-card-title>
      {{n.storeName}}
    </v-card-title>
    <v-card-subtitle>
      <v-rating
      class="ml-0 pl-0"
      v-model="rating"
      background-color="orange lighten-3"
      color="orange"
      small
      dense
    ></v-rating>
      Owner : {{ n.ownerName }} <br/>
      <v-icon
              left
              color="gray"
              small
            >
              mdi-google-maps
            </v-icon><span>{{n.address}}, {{n.upzila}}, {{n.zila}}</span>
    </v-card-subtitle>
    <v-card-action class="text-center">
      <div class="ma-2">
            <v-btn
              outlined
              color="#666666"
              dark
            >
              Visit Shop
            </v-btn>
      </div>
    </v-card-action>
  </v-card>
          </v-col>
        </v-row>
        <br>
        <div class="text-center">
           <v-btn
            :loading="loading3"
            :disabled="loading3"
            color="blue-grey"
            class="ma-2 white--text"
            @click="loader = 'loading3'"
          >
          <v-icon
              left
              dark
            >
              mdi-cached
            </v-icon>
            Load More
          </v-btn>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
  export default {
    data () {
      return {
        loader: null,
        loading3 : false,
        perPage: 10,
        shopInfo: [],
        shopList: [],
        rating: 4,

      }
    },
    methods: {
      toTop () {
        this.$vuetify.goTo(0)
      },
      loadShopList(){
        // console.log("prod loaded");
        axios.get('https://dokanee-backend-monolithic.herokuapp.com/v1/shop?pageSize='+this.perPage)
          .then((r) => {
          if (r.request.status == 200) {
            // console.log(r.request.status);
            this.shopList = r.data.data.data;
            this.shopInfo = r.data;
          }
        });
        // console.log(this.items);
    },
    visit(n){
      let route = this.$router.resolve({path: "/"+n.subDomain});
      window.open(route.href, '_blank');
    }
    },
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        this.perPage = this.perPage+10;
        this.loadShopList()
        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
    },
    mounted() {
      this.loadShopList();
    },
    computed: {
    },

  }
</script>
<style>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>