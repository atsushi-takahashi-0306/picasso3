<template>
  <div>
    <center>
      <v-sheet color="white" elevation="3" height="400" width="310">
        <div>
          <p class="login-txt">Login</p>
          <Auth />
        </div>
      </v-sheet>
    <nuxt-link to="/"><v-btn class="back-btn">戻る</v-btn></nuxt-link>
    </center>
  </div>
</template>

<script>
import Auth from "~/components/Auth.vue";

export default {
  head() {
    return {
      title: "picasso  |  login",
    };
  },
  components: {
    Auth,
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 30px;
  color: #35495e;
  letter-spacing: 1px;
}
.login-txt{
  font-size:30px;
  font-weight: 300;
  padding-top: 15px;
  margin-bottom: 70px;
}
.back-btn{
  margin-top: 30px;
}
</style>