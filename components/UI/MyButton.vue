<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'my-button',
}
</script>
<style scoped>
.btn {
  padding: 0.7em 1.5em;
  border-radius: 1em;
  border: 2px solid var(--secondary-color);
  background: none;
  transition: all 0.3s;
}
.btn:hover {
  cursor: pointer;
}
.btn:focus {
  outline: none;
}
.btn_buy:hover {
  background: var(--main-color);
  border-color: var(--main-color);
}
.btn_delete:hover {
  background: var(--cancel-color);
  border-color: var(--cancel-color);
  color: white;
}
</style>