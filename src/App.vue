<template>
  <div id="app">
    <meta 
     name='viewport' 
     content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' 
/>
<!-- <p>{{ subDomain }}</p> -->
    <router-view/>
  </div>
</template>

<script>
import axios from "axios";
export default {
    name: 'App',
    data () {
      return {
        subDomain: this.$route.params.store ,
      }
    },
    components: {
    },
    methods: {
      getStoreInfo() {
      let ins = this;
      // console.log(this.$route.params.store);
      // console.log("test");
      axios.get("https://dokanee-backend-monolithic.herokuapp.com/v1/shop/"+this.$route.params.store)
        .then((r) => {
          console.log(r.data);

          if (r.request.status == 200) {
            // console.log(r.request.status);
            this.$store.commit("setStoreInfo", r.data.data);
            // this.loadData(r.storeInfo);
          }
        })
        .catch((e) => {
            if (ins.subDomain != undefined)
            {
              this.$router.push("/"+ins.subDomain+"/not-found");
            }
        });
    },
    // loadData(e) {
    //   console.log(e);
    //   this.$store.commit("setStoreInfo", e);
    // },
    getTemplateInfo() {
      let ins = this;
      // console.log(this.$route.params.store);
      // console.log("test");
      axios.get("https://dokanee-backend-monolithic.herokuapp.com/v1/shop/"+this.$route.params.store+"/template")
        .then((r) => {
          // console.log(r.data);

          if (r.request.status == 200) {
            // console.log(r.request.status);
            this.$store.commit("setTemplateInfo", r.data.data);
            // this.loadData(r.storeInfo);
            this.$vuetify.theme.themes.light.primary = r.data.data.primaryColor.slice(0, -2)
            this.$vuetify.theme.themes.light.secondary = r.data.data.secondaryColor.slice(0, -2)
          }
        })
        .catch((e) => {
            console.log("No Template found");
        });
    },
    },
    mounted() {
    this.getStoreInfo();
    this.getTemplateInfo();
    },
    watch: {
    '$route.params.store': function (store) {
      this.getStoreInfo()
      this.getTemplateInfo()
    }
    },
    created: function () {
      this.getStoreInfo()
      this.getTemplateInfo()
    }
}
</script>
<style>
*{
  font-family: sans-serif, Helvetica, Arial !important;
}
</style>
