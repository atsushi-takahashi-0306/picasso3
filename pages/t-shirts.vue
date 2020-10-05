<template>
  <div>
    <h1 style="text-align: center">t-shirts page</h1>
    <div id="list"></div>
  </div>
</template>


<script>
import firebase from "~/plugins/firebase";
const db = firebase.firestore();

export default {
  head() {
    return {
      title: "picasso  |  t-shirts",
    };
  },
};
</script>
