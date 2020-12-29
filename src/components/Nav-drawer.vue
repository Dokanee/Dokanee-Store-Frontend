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
            <v-icon title="About" class="infoo" size="20">mdi-information-outline</v-icon>
        </v-list-item>

      <v-divider></v-divider>
      
      <v-list dense>
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
      </v-list>
    <v-footer color="#E7E7E7" padless>
    <v-col
      class="text-center"
      cols="12"
    >
    <span style="font-size:12px">{{ new Date().getFullYear() }} &copy; Dokanee.com.bd</span>
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
</style>