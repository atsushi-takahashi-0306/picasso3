<template>
  <div>
    <v-card class="mx-auto" max-width="344">
      <v-row justify="center">
        <v-img src="/images/bag.jpg" height="200px" width="200px">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-row>

      <v-card-title> Tote Bag </v-card-title>

      <v-card-subtitle> ¥9,600 </v-card-subtitle>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-icon class="mr-3">mdi-magnify-plus-outline</v-icon>
        <v-icon class="mr-3">mdi-heart-outline</v-icon>
        <v-icon class="mr-3">mdi-cart-outline</v-icon>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import Vue from "vue";
import firebase from "firebase";

export default {

};

</script>
