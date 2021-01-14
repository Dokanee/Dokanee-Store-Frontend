<template>
    <v-card
    elevation="0"
    max-width="99%"
    max-width-xm="100%"
    color="#F7F7F7"
    class="mx-auto mt-2"
  >
    <v-carousel
      :continuous="true"
      :cycle="true"
      :show-arrows="false"
      hide-delimiter-background
      delimiter-icon="mdi-minus"
      height="380"
    >
      <v-carousel-item
      style="background-color:#F7F7F7"
        v-for="(slide, i) in slides"
        :key="i"
      >
        <v-sheet
        class="rounded"
          :color="colors[i]"
          height="100%"
          tile
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="display-3">
              {{ slide }} Slide
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-card>    
</template>
<script>
  export default {
    data () {
      return {
        colors: [
          'green',
          'secondary',
          'yellow darken-4',
          'red lighten-2',
          'orange darken-1',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      }
    },
  }
</script>