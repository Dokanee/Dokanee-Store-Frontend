<template v-slot:prepend>
  <div>
    <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Injamamul Haque Sonet</v-list-item-title>
            <v-list-item-subtitle>Store Owner</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

      <v-divider></v-divider>
      
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
        >
          <v-list-item-icon>
            <v-icon size="18">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          { title: 'All Products', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
        ],
      }
    },
  }
</script>