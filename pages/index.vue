<template>
  <div>
    <h1 style="text-align: center">home page</h1>
    <div id="list"></div>
  </div>
</template>


<script>
import firebase from "~/plugins/firebase";
const db = firebase.firestore();

export default {
  head() {
    return {
      title: "picasso  |  home",
    };
  },
  mounted() {
    db.collection("bags")
      .get()
      .then((querySnapshot) => {
        let result = "";
        querySnapshot.forEach((doc) => {
          let data = doc.data();
          result += data.name + "//" + data.price + "円" + data.imageurl;
        });
        document.querySelector("#list").innerHTML = result;
      });
  },
};
</script>
