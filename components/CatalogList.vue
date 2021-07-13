<template>
  <div class="card-container" @updatedCart="$emit('updatedCart')">
    <catalog-list-item v-for="brand in brands" :key="brand.id" :brand="brand" />
  </div>
</template>

<script>
export default {
  props: {
    brands: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
}
</script>

<style scoped>
.card-container {
  margin-top: 2em;
  display: grid;
  grid-gap: 2em;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>