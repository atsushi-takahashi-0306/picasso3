<template>
  <div class="container">
    <center>
      <p class="thanks-msg">ご購入誠にありがとうございました。</p>
      <nuxt-link to="/">
        <v-btn class="back-btn"> 戻る </v-btn>
      </nuxt-link>
    </center>
  </div>
</template>


<script>
export default {
  head() {
    return {
      title: "picasso  |  checkout",
    };
  },
};
</script>


<style lang="scss" scoped>
.thanks-msg {
  margin-top: 30px;
}
.back-btn {
  margin-bottom: 132px;
}
</style>