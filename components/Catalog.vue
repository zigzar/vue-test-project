<template>
  <div @updatedCart="$emit('updatedCart')">
    <h1>{{ category.title }}</h1>
    <CatalogList :brands="brands" />
  </div>
</template>

<script>
import CatalogList from '@/components/CatalogList.vue'
export default {
  components: { CatalogList },
  props: {
    category: {
      type: Object,
      required: true,
      default: () => {},
    },
    brands: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
}
</script>

<style scoped>
</style>