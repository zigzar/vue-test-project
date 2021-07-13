<template>
  <div>
    <ul class="categories">
      <li class="categories__item">
        <nuxt-link
          exact
          class="link"
          :to="'/categories/'"
          active-class="link_active"
        >
          Все категории
        </nuxt-link>
      </li>
      <li
        v-for="category in categories"
        :key="category.id"
        class="categories__item"
      >
        <nuxt-link
          class="link"
          :to="`/categories/${category.code}`"
          active-class="link_active"
        >
          {{ category.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
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
.categories {
  list-style-type: none;
}
.link {
  text-decoration: none;
  color: #333;
}
.categories__item + .categories__item {
  margin-top: 1em;
}
.link_active {
  font-weight: bold;
}
</style>