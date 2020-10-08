<template>
    <div>
    <ul>
      <li v-for="item in $store.state.item.items" :key="item.id">
        <nuxt-link :to="{ name: 'bag-id', params: { id: item.id} }">
          <div>
            <img :src="item.url" width="350px">
            <div>
              <p>{{ item.name }}</p>
              <span>¥{{ Number(item.price) | addComma }}</span>
            </div>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>


<script>

export default {
  head() {
    return {
      title: "picasso  |  home",
    };
  },
   created () {
    this.$store.dispatch('item/init')
  }
};
</script>

<style>
ul{
  list-style-type: none;
}
  
</style>

