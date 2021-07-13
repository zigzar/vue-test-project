<template>
  <div class="content" @updatedCart="$emit('updatedCart')">
    <Sidebar class="sidebar" :categories="categories" />
    <Catalog class="catalog" :category="category" :brands="brands" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  async asyncData({ store }) {
    await store.dispatch('catalog/fetchCategories')
    await store.dispatch('brands/fetchBrands')
  },
  computed: {
    getCategory() {
      return this.$store.getters['catalog/getCategory']
    },
    getCategories() {
      return this.$store.getters['catalog/getCategories']
    },
    getBrands() {
      return this.$store.getters['brands/getBrands']
    },
  },
  data() {
    return {
      categories: [],
      category: {
        id: 0,
        title: 'Все категории',
        sort: '0',
        code: 'all',
      },
      brands: [],
    }
  },
  mounted() {
    this.categories = this.getCategories
    this.brands = this.getBrands
  },
}
</script>

<style scoped>
.content {
  display: flex;
  flex-wrap: nowrap;
}
.sidebar {
  width: 20%;
}
.catalog {
  width: 80%;
}
</style>