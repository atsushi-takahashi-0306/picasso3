<template>
  <div class="container">
    <ul class="grid">
      <li v-for="item in $store.state.item.items" :key="item.id">
        <nuxt-link :to="{ name: 'bag-id', params: { id: item.id } }">
          <img v-lazy="item.url" width="230px" class="grid-item" />
        </nuxt-link>
        <span class="name-txt">{{ item.name }}</span>
        <br />
        <span class="price-txt">¥{{ Number(item.price) | addComma }}</span>
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
  created() {
    this.$store.dispatch("item/init");
  },
};
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
.grid-item {
  margin-bottom: 10px;
  &:hover {
    opacity: 0.7;
  }
}
.name-txt {
  margin-left: 58px;
  font-weight: 500;
}
.price-txt {
  font-weight: 300;
  font-size: 14px;
  margin-left: 60px;
}
</style>

