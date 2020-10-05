<template>
  <div>
    <h1 style="text-align: center">bags page</h1>
    <div id="list"></div>
    <ul id="example-1">
      <li v-for="item in items">
        {{ item.name }}
        {{ item.price }}円
        <img :src="item.imageurl" />
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from "~/plugins/firebase";
import "firebase/storage";
const db = firebase.firestore();
const storage = firebase.storage();

export default {
  head() {
    return {
      title: "picasso  |  bags",
    };
  },
  data() {
    return {
      items: [],
    };
  },
  created() {
    db.collection("bags")
      .get()
      .then((querySnapshot) => {
        this.items = querySnapshot.docs.map((doc) => doc.data());
      });
  },
};
</script>

<style>
ul {
  list-style-type: none;
}
</style>