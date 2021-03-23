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
      axios.get("https://dokanee-backend-monolithic.herokuapp.com/dashboard/store/info?subDomain="+this.$route.params.store)
        .then((r) => {
          // console.log(r.data);

          if (r.request.status == 200) {
            // console.log(r.request.status);
            this.$store.commit("setStoreInfo", r.data);
            // this.loadData(r.storeInfo);
          }
          // else if (ins.subDomain=="undefined")
          // {
          //   console.log("this is null!")
          // }
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
    },
    mounted() {
    this.getStoreInfo();
    },
    watch: {
    '$route.params.store': function (store) {
      this.getStoreInfo()
    }
    },
    created: function () {
      this.getStoreInfo()
    }
}
</script>
<style>
*{
  font-family: sans-serif, Helvetica, Arial !important;
}
</style>
