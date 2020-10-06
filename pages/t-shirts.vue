<template>
  <div>
    <h1 style="text-align: center">t-shirts page</h1>
    <div id="list"></div>
    <ul>
      <li v-for="item in items">
        {{ item.name }}
        {{ item.price }}円
        <img :src="item.imageurl" />
      </li>
    </ul>
    <p>{{items}}</p>
  </div>
</template>

<script>
import firebase from "~/plugins/firebase";
import "firebase/storage";
const db = firebase.firestore();
const storage = firebase.storage();

export default {
  data() {
    return {
      items: [],
    };
  },
  created() {
    db.collection("t-shirts")
      .get()
      .then((querySnapshot) => {
        this.items = querySnapshot.docs.map((doc) => doc.data());
      });
  },
};
</script>

<style>
ul{
  list-style-type: none;
}
</style>
