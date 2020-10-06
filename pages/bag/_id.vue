<template>
  <div>
    <img :src="showItem.url" width="150px" height="150px">
    <div>
      <h3>{{ showItem.name }}</h3>
        <p>¥{{ Number(showItem.price) }}</p>
    </div>
    <nuxt-link to="/">戻る</nuxt-link>
  </div>
</template>


<script>
export default {
  computed: {
    showItem () {
      return this.$store.state.item.item
    }
  },
  created () {
    const itemId = this.$route.params.id
    this.$store.dispatch('item/show', itemId)
  },
}
</script>