<template>
  <div class="NotFound">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card class="justify-center align-center" style="margin:0 auto;text-align:center" height="400" color="transparent" flat>
            <h1 style="font-size: 50px;color:#00AC9C;margin-top:100px">Page not found!</h1>
            <div class="paragraph-text mt-2">
              <br />
              <br />Please enter a correct address or create a Dokanee store with this subdomain.
                <v-footer absolute color="#E7E7E7" padless>
                <v-col
                class="text-center"
                cols="12"
                >
                <span style="font-size:20px"><strong>Build With <span style="color:#00AC9C;" href="https://dokanee.com.bd">Dokanee.com.bd</span></strong></span>
                </v-col>
  </v-footer>  
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<style>
  .paragraph-text {
    font-size: 30px;
  }
</style>