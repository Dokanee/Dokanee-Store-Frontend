<template>
<div> 
    <v-container fluid>
      <transition name="fade">
      <v-row class="mb-12">
                  
              <v-card dense style="background-color:#F7F7F7" flat width="100%" class="mx-auto">
                    <v-card-title class="title mb-0">
                        <!-- {{ $route.params.catName }} -->
                        Search Result for "<b>{{ $route.params.search }}</b> " ( {{ itemsInfo.totalItem }} Items)
                        <!-- {{ cleanString("Rin Power & white Powder 2x ") }} -->
                    </v-card-title>
                      <v-data-iterator
                          :items="items"
                          :items-per-page.sync="itemsPerPage"
                          :page="page"
                          :search="search"
                          :sort-by="sortBy.toLowerCase()"
                          :sort-desc="sortDesc"
                          hide-default-footer
                          >
                          <template v-slot:default="props">
                              <v-main class="px-lg-5 px-md-4 py-3">
                              <v-row align="center"  :justify="$vuetify.breakpoint.xs ? 'center' : 'left'" dense>
                              <v-col
                                  v-for="item in props.items"
                                  :key="item.productName"
                                  align-self="start"
                                  style="max-width:200px"
                                  class="my-0.8"
                                  
                              >
                                  <v-hover
                                    v-slot="{ hover }"
                                  >
                                  <v-card justify="left" :max-width="$vuetify.breakpoint.xs ? '180' : '190'" class="col pa-0 item-selection" :elevation="hover ? 3 : 0" style="cursor:pointer" flat>
                                  <v-container v-ripple @click="productInfo = true ,pInfo(item)">
                                      <v-img
                                    contain
                                      class="white--text"
                                      height="160px"
                                      :src="item.images[0]==null ? 'https://qa-cdn.samsung.com/etc/designs/smg/global/imgs/support-new/img-no-product.png' : item.images[0]"
                                    >
                                      <v-container fill-height fluid>
                                        <v-layout fill-height>
                                          <v-flex xs12 align-end flexbox>
                                          <v-chip
                                          color="#ea5455"
                                          style="color:white;font-size:10px">
                                            New
                                          </v-chip>    
                                          </v-flex>
                                        </v-layout>
                                      </v-container>
                                    </v-img>
                                    <v-card-title class="my-0 py-0" style="height:60px;font-size:14px;letter-spacing:0.5px;line-height: normal;">
                                    <v-row align="center" justify="center">
                                       <b> {{item.productName}} </b>
                                    </v-row>
                                  </v-card-title>  
                                  <v-card-content>
                                      <v-list-item-content align="center" class="py-0" style="display:block;font-sbackground-color:white;ize:12px">
                                          <v-chip
                                            :color="getColor(item.inStock)"
                                            style="font-size:10px;"
                                            dark
                                            class="mx-1"
                                            outlined
                                          >
                                            {{getStockAns( item.inStock) }}
                                          </v-chip>
                                          <v-chip
                                          color="matblue"
                                          style="color:black;font-size:12px;">
                                            &#2547; {{ item.currentPrice }}
                                          </v-chip>
                                      </v-list-item-content>
                                      </v-card-content>
                                  </v-container>        
                                    <v-card-actions :color="color"  class="ma-0 pa-2">
                                      <v-btn block color="grey lighten-2" large round depressed class="mx-auto ma-0" @click="colchange">ADD TO CART</v-btn>
                                      
                                    </v-card-actions>
                                  </v-card>
                                </v-hover>
                              </v-col>
                              </v-row>
                              </v-main>
                          </template>
                  </v-data-iterator>
              </v-card>
              <v-dialog
                    v-model="productInfo"
                    max-width="950"
                  >
                    <v-card class="pa-8">
                      <v-row>
                        <v-col cols="12" lg="6">
                          <v-img
                              container
                              max-width="350"
                              justify="center"
                              class="white--text mx-auto"
                              src="https://qa-cdn.samsung.com/etc/designs/smg/global/imgs/support-new/img-no-product.png">
                              <v-container fill-height fluid>
                                <v-layout fill-height>
                                  <v-flex xs12 align-end flexbox>
                                  <v-chip
                                  color="#ea5455"
                                  style="color:white;font-size:12px">
                                    New
                                  </v-chip>    
                                  </v-flex>
                                </v-layout>
                              </v-container>
                            </v-img>
                        </v-col>
                        <v-col cols="12" lg="6">
                          <v-card-title>
                            {{ pInfoItem.productName }}
                          </v-card-title>
                          <br>
                          <v-card-subtitle>
                            <v-chip :color="getColor(pInfoItem.inStock)" outlined>
                                            {{ getStockAns( pInfoItem.inStock) }}
                          </v-chip><br><br>
                          <strong style="font-size:16px">Price: {{ pInfoItem.currentPrice }} Tk</strong>
                          </v-card-subtitle>
                          
                          <v-card-actions :color="color"  class="ma-0 pa-0">

                                        <v-btn color="grey lighten-2" large round depressed class="mx-auto" @click="colchange">Buy Now</v-btn>
                                                                  
                          </v-card-actions>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" lg="12">
                        <v-card-subtitle>
                              <v-tabs
                                v-model="tab"
                                background-color="transparent"
                                centered
                                text
                                color="black"
                              >
                                <v-tab
                                key="1">
                                  Description
                                </v-tab>
                                <v-tab
                                key="2">
                                  Reviews
                                </v-tab>
                                <v-tab
                                key="2">
                                  Comments
                                </v-tab>
                              </v-tabs>
                              
                              <v-tabs-items v-model="tab">
                                  <v-tab-item
                                  key="1"
                                  >
                                    <v-card
                                      flat
                                    >
                                      <v-card-text><span v-html="pInfoItem.description"></span></v-card-text>
                                    </v-card>
                                  </v-tab-item>
                                </v-tabs-items>
                          </v-card-subtitle>
                          </v-col>
                      </v-row>
                      <v-card-actions>
                        <v-btn
                          color="red"
                          icon
                          absolute top right
                          @click="productInfo = false"
                        >
                          <v-icon color="white">mdi-close</v-icon>
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
              </v-row>             
  </transition>
  </v-container>
</div>
</template>

<script>
import axios from "axios";
export default {
data () {
        
    return {
        tab: null,
        productInfo: false,
        productQuantity: "1",
        itemsPerPageArray: [4, 8, 12, 50],
        filter: {},
        rating: 3,
        sortDesc: false,
        page: 1,
        pInfoItem: 1,
        color:"grey lighten-2",
        itemsPerPage: 10,
        sortBy: 'name',
        keys: [
          'imageLink',
          'productName',
          'sellPrice',
          'inStock',
        ],
        selingCart: [],
        search: "",
        subDomain: this.$route.params.store,
        items: [],
        itemsInfo: []
      }
    },
    // created() {
    //   EventBus.$on("addToCart", (payload) => {
    //     this.selingCart.push(payload);
    //   });
    // },
    computed: {
      numberOfPages () {
        return Math.ceil(this.items.length / this.itemsPerPage)
      },
      filteredKeys () {
        return this.keys.filter(key => key !== 'Name')
      },
      total() {
        var total = 0;
        for(var index=0;index<this.selingCart.length;index++){
          var i = this.selingCart[index];
          total += i.quantity * i.price;
        }
        return total;
      },
    },
    methods: {
      nextPage () {
        if (this.page + 1 <= this.numberOfPages) this.page += 1
      },
      formerPage () {
        if (this.page - 1 >= 1) this.page -= 1
      },
      updateItemsPerPage (number) {
        this.itemsPerPage = number
      },
      getColor (c) {
        if (c == false) return '#ea5455'
        else return '#28c76f'
      },
      getStockAns(c){
        if (c == false) return 'Stock Out'
        else return 'Available'
      },
      addToCart(a,b,c) {
        this.selingCart.push({ilink: a,name: b, price: c,quantity: 1});
        console.log(this.selingCart);
      },
      deleteFromCart(i){
        this.selingCart.splice(i, 1);
      },
      colchange(){
        this.color = this.color === "blue"?"grey lighten-2":"blue";
      },
      pInfo(i){
        this.pInfoItem = i;
      },
      cleanString(string) {
          return string.replace(/\s/g, '-').toLowerCase()
      },
      returnString(string) {
        if(string && string!="all-products")
          {
            return string.replace('-',' ').slice(0, -8).toUpperCase()
          }
        else
          {
              return "ALL PRODUCTS";
          }
      },
      loadAllProducts(){
        // console.log("prod loaded");
        axios.get('https://dokanee-backend-monolithic.herokuapp.com/v1/shop/'+this.subDomain+'/products?pageNo=0&pageSize=20')
          .then((r) => {
          // console.log(r.data);
          if (r.request.status == 200) {
            // console.log(r.request.status);
            this.items = r.data.shopProductModelResponses;
            this.itemsInfo = r.data;
          }
        });
        // console.log(this.items);
      
    },
    loadProducts(){
        // console.log("prod loaded");
        axios.get('https://dokanee-backend-monolithic.herokuapp.com/v1/shop/'+this.subDomain+'/products?pageNo=0&pageSize=20&productName='+this.search)
          .then((r) => {
          // console.log(r.data);
          if (r.request.status == 200) {
            // console.log(r.request.status);
            this.items = r.data.shopProductModelResponses;
            this.itemsInfo = r.data;
          }
        });
        // console.log(this.items);
      
    },
    remount(){
      if(this.$route.params.search==null)
          {
            this.loadAllProducts();
          }
        else if(this.$route.params.search)
          {
            this.search = this.$route.params.search;
            this.loadProducts();
          }
        else
          this.loadAllProducts();
    }
    },
    // mounted(){
    //   this.loadAllProducts();
    // }
    watch: {
    '$route.params.search': function (search) {
      this.remount()
    }
    },
    created: function () {
      this.remount()
    }
    // mounted(){
    //   if(this.$route.params.catName=="all-products")
    //       {
    //         this.loadAllProducts();
    //       }
    //     else if(this.$route.params.catName)
    //       {
    //         this.catName = this.$route.params.catName;
    //         this.loadProducts();
    //       }
    //     else
    //       this.loadAllProducts();
    // }
}
</script>
<style scoped>
button {
    display: inline-block;
    padding: 10px;
    margin: 10px;
    cursor: pointer;
    color: white;
    background-color: teal;
    font-size: small;
    justify-content: center;
    margin: 5px;
}
.item-selection {
  border: 1px solid #ddd;
}

.cart-item{
  border: 1px solid #ddd;
}
.quantity {
  width: 50px;
  height: 30px;
  border: 1px solid #ddd;
  padding: 3px;
}
.trow {
 box-sizing: border-box;
 overflow: hidden;
 margin: auto;
 position: relative;
}
.close{
  background-color: thistle;
  color: red;  
  position: absolute;
  right: 5px;
  top: 5px;
  box-sizing: border-box;
  overflow: hidden;
}
.close:hover{
  cursor: pointer;
}
.button-full {
  box-sizing: border-box;
  overflow: hidden;
  margin: auto;
  color:white;
}
.pinfo v-col{
  padding: 0;
  margin: 0;
}
</style>
