<template lang="html">
    <input  
        class="input"
        type="number" 
        :value="modelValue"
        @input="updateInput"
    >
</template>
<script>
export default {
  name: 'my-input',
  props: {
    modelValue: [Number],
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    },
  },
}
</script>
<style>
.input {
  padding: 10px;
  border: 2px solid var(--secondary-color);
  width: 100%;
  transition: all 0.3s;
  border-radius: 1em;
}
.input:hover {
  border-color: var(--main-color);
}
.input:focus {
  outline: none;
}
</style>