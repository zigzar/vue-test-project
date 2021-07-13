<template>
  <select
    class="select"
    name=""
    id=""
    v-model="selected"
    @change="changeOptions"
    required
  >
    <option disabled hidden value="0">Тип</option>
    <option v-for="option in options" :key="option" :value="option">
      {{ option }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    selected: {
      type: [String, Number],
      default: 0,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOptions(event) {
      this.$emit('updateSelected', event.target.value)
    },
  },
}
</script>

<style scoped>
.select {
  padding: 0.5em 1em;
  border-radius: 1em;
  border: 2px solid var(--secondary-color);
  background: none;
  transition: all 0.3s;
}
.select:hover {
  border: 2px solid var(--main-color);
  cursor: pointer;
}
.select:focus {
  outline: none;
}
</style>