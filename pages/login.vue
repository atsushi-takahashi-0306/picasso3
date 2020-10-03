<template>
  <div>
    <h1 style="text-align: center">login page</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCKE_V3oAZtCKwYddAm34Rm1NKHr5WJF9o",
  authDomain: "picasso-newproject.firebaseapp.com",
  databaseURL: "https://picasso-newproject.firebaseio.com",
  projectId: "picasso-newproject",
  storageBucket: "picasso-newproject.appspot.com",
  messagingSenderId: "776720652337",
  appId: "1:776720652337:web:7a6a09e798cb0aeecf5d10",
  measurementId: "G-3HC5QSBTJW",
};
try {
  firebase.initializeApp(firebaseConfig);
} catch (e) {
  console.log(e);
}

function login(){
  let email:null=document.querySelector('#email').value;
  let password=document.querySelector("#password").value;
  firebase.auth().signInWithEmailAndPassword(email,password).then((result)=>{
    console.log("sign in successfully.");
  }).catch((error)=>{
    console.log(error.message);
    document.querySelector("#msg").textContent="fail to login...";
  });
}

function logout(){
  firebase.auth()signOut();
  document.getElementById("msg").textContent="no login..."
}

export default Vue.extend({});
</script>
