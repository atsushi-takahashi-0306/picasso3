<template>
  <center>
    <div v-if="error.statusCode === 404">
      <h1 class="error-number">404</h1>
      <h1 class="error-title">Page Not Found</h1>
    </div>

    <div v-else>
      <h1>Page Not Found</h1>
    </div>

    <span>please make sure the URL is correct or not.</span>
    <p class="top-btn">
      click here to
      <NuxtLink to="/"> Top page </NuxtLink>
    </p>
  </center>
</template>

<script>
export default {
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
  data() {
    return {
      pageNotFound: "Page Not Found",
      otherError: "Page Not Found",
    };
  },
};
</script>

<style scoped>
span {
  margin-top: 15px;
  font-weight: bold;
}
.error-number {
  margin-bottom: 0;
  font-size: 35px;
}
.error-title {
  margin-top: 0;
  font-size: 35px;
}
.top-btn {
  margin-top: 5px;
  font-weight: bold;
  margin-bottom: 58px;
}
</style>
