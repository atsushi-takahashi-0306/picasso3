<template>
  <div>
    <h1 style="text-align: center">accessories page</h1>
    <div id="list"></div>
  </div>
</template>


<script>
import 'firebase/storage';
import firebase from "~/plugins/firebase";
const db = firebase.firestore();

export default{
mounted(){
  db.collection("accessories")
    .get()
    .then((querySnapshot) => {
      let result = "";
      querySnapshot.forEach((doc) => {
        let data = doc.data();
        result +=  data.name +"//"+ data.price+"円"+data.imageurl;  
      });
      document.querySelector("#list").innerHTML = result;
      });
    }
}
</script>