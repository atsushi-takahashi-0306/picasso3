<template>
  <div>
    <div v-show="isLogin">
      <p>ログイン中</p>
      <p>メールアドレス：{{ isLogin }}</p>
      <p class="name-txt">お名前：{{ displayName }}</p>
      <v-btn @click="logout">ログアウト</v-btn>
    </div>
    <div v-show="!isLogin" id="firebaseui-auth-container"></div>
  </div>
</template>


<script>
import firebase from "~/plugins/firebase";

export default {
  computed: {
    isLogin() {
      return this.$store.state.user.email;
    },
    displayName() {
      return this.$store.state.user.displayName;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("user/logout");
      const firebase = require("firebase");
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log("Logout is done!");
        });
    },
    or() {
      const elements = document.getElementsByClassName();
    },
  },
  mounted() {
    const firebase = require("firebase");
    const firebaseui = require("firebaseui-ja");
    require("firebaseui-ja/dist/firebaseui.css");

    const uiConfig = {
      signInSuccessUrl: "/",
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      ],
    };

    const ui =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", uiConfig);

    firebase.auth().onAuthStateChanged((user) => {
      this.$store.dispatch("user/login", user);
    });
  },
};
</script>


<style lang="scss" scoped>
.name-txt {
  margin-right: 20px;
  margin-bottom: 60px;
}
</style>