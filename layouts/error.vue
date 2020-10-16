<template>
  <center>

      <h1 v-if="error.statusCode === 404">
        {{ pageNotFound }}
      </h1>
      <h1 v-else>
        {{ otherError }}
      </h1>
      <span style="margin-top:15px; font-weight:bold;">please make sure the URL is correct or not.</span>
      <p style="margin-top:5px; font-weight:bold;" class="top-btn" >click here to 
      <NuxtLink to="/">
        Top page
      </NuxtLink>
      </p>

  </center>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 page not found',
      otherError: '404 page not found'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
.top-btn{
  margin-bottom: 152px;
}

</style>
