<template v-slot:prepend>
  <div>
    <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg">
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Anika Tabassum</v-list-item-title>
            <v-list-item-subtitle>Store Owner</v-list-item-subtitle>
          </v-list-item-content>
          <v-btn elevation="1" icon fev>
              <v-icon title="About" size="25">mdi-information-outline</v-icon>
          </v-btn>
        </v-list-item>

      <v-divider></v-divider>

      <v-expansion-panels hover accordion>
        <v-expansion-panel
           v-for="item in items"
          :key="item.title"
        >
          <v-expansion-panel-header outline-color="red" class="py-0 my-0" expand-icon="mdi-menu-down">
           <span style="font-size:14px" class="text-truncate"><v-icon class="mr-4" left size="20">{{ item.icon }}</v-icon>{{ item.title }}</span>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="pl-8">
            <v-text link style="font-size:14px">No Sub Category Found!</v-text>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      
      <!-- <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
        >
          <v-list-item-icon>
            <v-icon size="20">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title style="font-size:14px">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list> -->
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
  export default {
    data () {
      return {
        items: [
          { title: 'All Products', icon: 'mdi-all-inclusive' },
          { title: 'Electronic Devices', icon: 'mdi-devices' },
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