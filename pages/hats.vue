<template>
  <div class="home">
    <ul>
      <li v-for="item in $store.state.item.items" :key="item.id">
        <nuxt-link :to="{ name: 'item-id', params: { id: item.id} }">
          <div class="item">
            <img :src="item.url">
            <div class="item-info">
              <p>{{ item.title }}</p>
              <span>¥{{ item.price | format-price }}</span>
            </div>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('item/init')
  }
}
</script>