<template>
    <div>
    <ul class="grid">
      <li v-for="item in $store.state.item.items" :key="item.id" >
        <nuxt-link :to="{ name: 'bag-id', params: { id: item.id} }">
            <img v-lazy="item.url" width="230px" class="opacity">
        </nuxt-link>
              <p>{{ item.name }}</p>
              <p>¥{{ Number(item.price) | addComma }}</p>
      </li>
    </ul>
  </div>
</template>


<script>

export default {
  head() {
    return {
      title: "picasso  |  bags",
    };
  },
   created () {
    this.$store.dispatch('item/init')
  }
};
</script>

<style lang="scss" scoped>

.grid{
  display:grid;
  grid-template-columns: repeat(4,1fr);
  gap:15px;
}
.opacity:hover{
  opacity:0.75;
}
.price-txt{
    font-weight: 300;
    font-size:14px;
}


</style>
