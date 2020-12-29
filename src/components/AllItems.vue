<template>
<div> 
    <v-container fluid>
      <transition name="fade">
      <v-row class="mb-12">
                  <v-card style="background-color:#F7F7F7" flat width="100%" class="mx-auto">
                    <v-card-title class="title">
                        All Products
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
                              <v-main class="pa-5">
                              <v-row>
                              <v-col
                                  v-for="item in props.items"
                                  :key="item.productName"
                                  cols="16"
                                  sm="6"
                                  md="3"
                                  lg="3"
                              >
                                  <v-hover
                                    v-slot="{ hover }"
                                  >
                                  <v-card @click="addToCart(item.imageLink,item.productName,item.sellPrice)" class="item-selection ma-0" :elevation="hover ? 3 : 0" style="cursor:pointer" flat>
                                      <v-img
                                    contain
                                      class="white--text"
                                      height="160px"
                                      src="https://pngimg.com/uploads/men_shoes/men_shoes_PNG7475.png"
                                    >
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
                                    <v-card-title style="height:60px;font-size:14px;letter-spacing: 1px;line-height: normal;">
                                    <div class="ma-2">
                                        {{item.productName}}
                                    </div>
                                  </v-card-title>  
                                  <v-card-content>
                                      <v-list-item-content align="center" class="pa-2" style="display:block;font-sbackground-color:white;ize:12px">
                                          <v-chip
                                            :color="getColor(item.inStock)"
                                            style="font-size:13px; margin:5px"
                                            dark
                                            outlined
                                          >
                                            {{getStockAns( item.inStock) }}
                                          </v-chip>
                                          <v-chip
                                          color="matblue"
                                          style="color:black">
                                            &#2547; {{ item.sellPrice }}
                                          </v-chip>
                                      </v-list-item-content>
                                      </v-card-content>        
                                    <v-divider></v-divider>
                                    <v-card-actions class="ma-0 pa-0">
                                      <v-btn large round depressed :color="color" class="mx-auto" @click="colchange">ADD TO CART</v-btn>
                                      
                                    </v-card-actions>
                                  </v-card>
                                </v-hover>
                              </v-col>
                              </v-row>
                              </v-main>
                          </template>
                  </v-data-iterator>
              </v-card>
              </v-row>
  </transition>
  </v-container>
</div>
</template>
<script>
export default {
data () {
        
    return {
        productQuantity: "1",
        itemsPerPageArray: [4, 8, 12, 50],
        search: '',
        filter: {},
        rating: 3,
        sortDesc: false,
        page: 1,
        color:"grey lighten-2",
        itemsPerPage: 8,
        sortBy: 'name',
        keys: [
          'imageLink',
          'productName',
          'sellPrice',
          'inStock',
        ],
        selingCart: [],
        items: [
          {
            imageLink: 'https://wineguide.wein.plus/uploads/editor/images/6739/59c28a0334395_q80.jpg',
            productName:'Rin Power white Powder 2x',
            sellPrice: 230,
            inStock: true,
          },
          {
            imageLink: 'https://wineguide.wein.plus/uploads/editor/images/6739/59c28a0334395_q80.jpg',
            productName:'Rin Power white Powder',
            sellPrice: 230,
            inStock: true,
          },
          {
            imageLink: 'https://wineguide.wein.plus/uploads/editor/images/6739/59c28a0334395_q80.jpg',
            productName:'Rin Power white',
            sellPrice: 230,
            inStock: false,
          },
          {
            imageLink: 'https://wineguide.wein.plus/uploads/editor/images/6739/59c28a0334395_q80.jpg',
            productName:'RFL Table',
            sellPrice: 230,
            inStock: true,
          },
          {
            imageLink: 'https://wineguide.wein.plus/uploads/editor/images/6739/59c28a0334395_q80.jpg',
            productName:'Rin Power white Power 2x Max Pro Lite',
            sellPrice: 230,
            inStock: false,
          },
          {
            imageLink: 'https://wineguide.wein.plus/uploads/editor/images/6739/59c28a0334395_q80.jpg',
            productName:'Rin Power white Power 2x',
            sellPrice: 230,
            inStock: true,
          },
          {
            imageLink: 'https://wineguide.wein.plus/uploads/editor/images/6739/59c28a0334395_q80.jpg',
            productName:'Rin Power white Power 2x',
            sellPrice: 230,
            inStock: true,
          },
          {
            imageLink: 'https://wineguide.wein.plus/uploads/editor/images/6739/59c28a0334395_q80.jpg',
            productName:'Rin Power white Power 2x',
            sellPrice: 230,
            inStock: true,
          },
          {
            imageLink: 'https://wineguide.wein.plus/uploads/editor/images/6739/59c28a0334395_q80.jpg',
            productName:'Rin Power white Power 2x',
            sellPrice: 230,
            inStock: true,
          },
          {
            imageLink: 'https://wineguide.wein.plus/uploads/editor/images/6739/59c28a0334395_q80.jpg',
            productName:'Rin Power white Power 2x',
            sellPrice: 230,
            inStock: true,
          },
          
        ],
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
    },
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
