<template v-slot:prepend>
  <div>
    <v-list-item two-line>
          <v-list-item-avatar>
             <v-img :src="storeInfo.ownerPhotoLink==null ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTugu0kegXOT1Gh1sgDVHvYjkGW29w19Hl9gQ&usqp=CAU' : storeInfo.ownerPhotoLink "></v-img>
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
        <v-list-item link :to="'/'+subDomain+'/category/all-products'">
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
            <span style="font-size:14px" class="text-truncate"><v-icon class="mr-4" left size="20">{{ item.categoryIcon ? item.categoryIcon : 'mdi-label-outline' }}</v-icon>{{ item.categoryName}}</span>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="child in item.subCategoryList"
          :key="child.subCategoryName"
          link :to="'/'+subDomain+'/category/'+child.slug"
          @click="this.loadProducts()"
        >
          <v-list-item-content>
            <v-list-item-title v-text="child.subCategoryName"></v-list-item-title>
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
    <span style="font-size:15px"><strong>Build With <span style="color:#00AC9C;" href="https://dokanee.com.bd">Dokanee</span></strong></span>
    <div>
      <v-btn
      depressed
      class="mt-3"
      color="primary"
      style="font-size:12px;color:white;"
      href="https://dokanee.com.bd">
       Make Yours
      </v-btn>
    </div>
    </v-col>
  </v-footer>
  </div>
</template>

<script>
import axios from "axios";
import {mapGetters, mapActions} from "vuex";

  export default {
    data () {
      return {
        subDomain: this.$route.params.store,
        items: [],
        categories: [
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
      ...mapActions(["getStoreInfo","getTemplateInfo"]),
      loadCategories(){
        axios.get('https://dokanee-backend-monolithic.herokuapp.com/v1/shop/'+this.subDomain+'/categories')
          .then((r) => {
          console.log(r.data);
          if (r.request.status == 200) {
            // console.log(r.request.status);
            this.items = r.data.shopCategories;
          }
        });
      }
    },
    mounted(){
      this.loadCategories();
    },
    computed: mapGetters(["storeInfo","templateInfo"]),
    created() {
      this.getInfo();
      this.getTemplate();
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