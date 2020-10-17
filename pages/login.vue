<template>
  <div>
    <center>
      <v-sheet color="white" elevation="3" height="400" width="310">
        <div>
          <p class="login-txt">Login</p>
          <Auth />
        </div>
      </v-sheet>
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
.login-txt {
  font-size: 30px;
  font-weight: 300;
  padding-top: 15px;
  margin-bottom: 50px;
}
.back-btn {
  margin-top: 10px;
}
</style>