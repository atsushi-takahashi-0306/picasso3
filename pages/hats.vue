<template>
  <div>
    <h1 style="text-align: center">hats page</h1>
    <div id="list"></div>
  </div>
</template>


<script>
import "firebase/storage";
import firebase from "~/plugins/firebase";
const db = firebase.firestore();

export default {
  head() {
    return {
      title: "picasso  |  hats",
    };
  },
  mounted() {
    db.collection("hats")
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