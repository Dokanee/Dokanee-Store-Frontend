<template>
  <v-footer
    dark
    padless
    
  >
    <v-card
      class="flex"
      flat
      color="#BDBDBD"
    >
      <v-card-title>
        <t class="subheading">Get connected with us on social networks!</t>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>
      <v-row style="background-color:#ffffff;" class="black--text ma-0">
          <v-col>
            <div class="black--text ml-5">
              <strong class="primary--text" style="font-size:18px">{{ storeInfo.storeName }}</strong>
            </div>
            <br>
            <div style="font-size:14px" class="black--text mx-5">
            {{ storeInfo.storeInfo }}
            </div>
            <br>
            <div style="font-size:14px" class="black--text mx-5">
              <v-icon
              left
              color="black"
              small
            >
              mdi-google-maps
            </v-icon><span>{{storeInfo.address}}, {{storeInfo.upzila}}, {{storeInfo.zila}}</span>
            </div>
          </v-col>
          <v-col>
2
          </v-col>
        </v-row>
      <v-card-text style="background-color:#f7f7f7" class="py-2 black--text text-center">
        {{ new Date().getFullYear() }} — <strong>Dokanee Shopping</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
import {mapGetters, mapActions} from "vuex";
  export default {
    data: () => ({
      secondaryColor: "#f0f0f0",
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
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