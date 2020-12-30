<template>
  <v-sheet
  style="background-color:#F7F7F7"
    class="mx-auto"
    elevation="0"
    max-width="100%"
  >
    <v-slide-group
      v-model="model"
      class="pt-3 pa-2"
      center-active
      show-arrows
    >
      <v-slide-item
        v-for="n in 15"
        :key="n"
        v-slot="{ active, toggle }"
      >
        <v-card
          :color="active ? 'red' : 'grey lighten-1'"
          class="ma-4"
          height="110"
          width="220"
          @click="toggle"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-scale-transition>
              <v-icon
                v-if="active"
                color="white"
                size="48"
              ></v-icon>
            </v-scale-transition>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>
<script>
  export default {
    data: () => ({
      model: [],
    }),
  }
</script>