<template v-slot:prepend>
  <div>
    <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg">
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ storeInfo.ownerName }}</v-list-item-title>
            <v-list-item-subtitle>Store Owner</v-list-item-subtitle>
          </v-list-item-content>
          <v-btn elevation="1" icon fev>
              <v-icon title="About" size="25">mdi-information-outline</v-icon>
          </v-btn>
        </v-list-item>

      <v-divider></v-divider>
      
       <v-list dense>
        <v-list-item link :to="'/'+subDomain+'/products'">
        <span style="font-size:14px" class="text-truncate"><v-icon class="mr-4" left size="20">mdi-all-inclusive</v-icon>All Products</span>
        </v-list-item>
      <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <span style="font-size:14px" class="text-truncate"><v-icon class="mr-4" left size="20">{{ item.icon }}</v-icon>{{ item.title }}</span>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="child in item.items"
          :key="child.title"
          link
          :to="item.link" 
        >
          <v-list-item-content>
            <v-list-item-title v-text="child.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
    
    <div class="mb-4">.</div>
    <v-footer absolute color="#E7E7E7" padless>
    <v-col
      class="text-center"
      cols="12"
    >
    <span style="font-size:13px"><strong>Build With <span style="color:#00AC9C;" href="https://dokanee.com.bd">Dokanee.com.bd</span></strong></span>
    </v-col>
  </v-footer>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

  export default {
    data () {
      return {
        subDomain: this.$route.params.store,
        items: [
          { title: 'Electronic Devices', icon: 'mdi-devices',items: [
            { title: 'Breakfast & brunch' },
            { title: 'New American' },
            { title: 'Sushi' },
          ], },
          { title: 'TV & Home Appliances', icon: 'mdi-television' },
          { title: 'Health & Beauty', icon: 'mdi-medical-bag' },
          { title: 'Babies & Toys', icon: 'mdi-human-female-girl' },
          { title: 'Groceries & Pets', icon: 'mdi-cat' },
          { title: 'Home & Lifestyle', icon: 'mdi-home' },
          { title: 'Womens Fashion', icon: 'mdi-gender-female' },
          { title: 'Mens Fashion', icon: 'mdi-gender-male' },
          { title: 'Watches & Accessories', icon: 'mdi-watch' },
          { title: 'Sports & Outdoor', icon: 'mdi-run' },
          { title: 'Automotive & Motorbike', icon: 'mdi-bike' },

        ],
      }
    },
     methods: {
      ...mapActions(["getInfo"])
    },
    computed: mapGetters(["storeInfo"]),
    created() {
      this.getInfo();
    }
  }
</script>
<style>
.infoo {
  position: absolute;
  right: 2px;
  top:5px;
  background-color: #f7f7f7;
  padding: 5px;
  margin: 0;
  border:1px;
  border-radius:25px;
}
.infoo:hover {
  border:1px solid gray;
  cursor: pointer;
}
.Catagories {
  text-align: left;
}
</style>