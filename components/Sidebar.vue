<template>
  <aside class="sidebar">
    <SidebarList :categories="categories" />
  </aside>
</template>

<script>
import SidebarList from '~/components/SidebarList'
export default {
  components: {
    SidebarList,
  },
  props: {
    categories: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
}
</script>

<style scoped>
.sidebar {
  padding: 1em 1em 1em 0;
}
</style>