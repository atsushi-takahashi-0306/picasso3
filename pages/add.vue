<template>
  <div>
      <v-flex xs5 mt-5>
        <v-card>
          <v-card-text>
            <v-form>
              <v-text-field v-model="item.name" label="goods name" />
              <v-text-field v-model="item.price" label="price" />
              <v-file-input v-model="item.img" label="image file" />
              <v-btn :color="this.$vuetify.theme.themes.dark.info" @click="submit">
                保存
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
  </div>
</template>

 
<script>
export default {
  head() {
    return {
      title: "picasso  |  add",
    };
  },
  data () {
    return {
      item: {}
    }
  },
  methods: {
    submit () {
        this.$store.dispatch('item/upImage', this.item.img)
       .then((url) => { 
          this.item.url = url
          this.$store.dispatch('item/addItem', this.item)
          this.item = ''
          this.$router.push({ name: 'index' }) }) 
    }
  }
};
</script>

